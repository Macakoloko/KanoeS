const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

async function fixPageFile(filePath) {
  try {
    let content = await readFile(filePath, 'utf8');
    let originalContent = content;
    let modified = false;
    
    // Verificar se o arquivo usa PageTransition
    if (content.includes('<PageTransition>') || content.includes('import PageTransition from')) {
      console.log(`Corrigindo PageTransition em: ${filePath}`);
      
      // Remover a importação do PageTransition
      if (content.includes('import PageTransition from')) {
        content = content.replace(/import PageTransition from.*?\n/g, '');
        modified = true;
      }
      
      // Substituir as tags PageTransition por div
      if (content.includes('<PageTransition>')) {
        content = content.replace(/<PageTransition>/g, '<div>');
        content = content.replace(/<\/PageTransition>/g, '</div>');
        modified = true;
      }
    }
    
    // Verificar se há fragmentos vazios (<> </>) que podem causar problemas
    if (content.includes('<>')) {
      console.log(`Corrigindo fragmentos vazios em: ${filePath}`);
      content = content.replace(/<>/g, '<div>');
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }
    
    // Verificar e corrigir retornos JSX incompletos
    const returnPattern = /return\s*\(\s*(\{|\n)/;
    if (returnPattern.test(content) && !content.includes('return (') && !content.includes('return (<')) {
      console.log(`Corrigindo estrutura de retorno em: ${filePath}`);
      content = content.replace(/return\s*\(\s*(\{|\n)/g, 'return (\n      <div>\n        ');
      
      // Adicionar fechamento da tag div e parêntese no final da função
      const lastCurlyBraceIndex = content.lastIndexOf('}');
      if (lastCurlyBraceIndex !== -1) {
        content = content.slice(0, lastCurlyBraceIndex) + '      </div>\n    )\n  ' + content.slice(lastCurlyBraceIndex);
      }
      
      modified = true;
    }
    
    // Verifica se o conteúdo foi modificado antes de salvar
    if (modified && content !== originalContent) {
      await writeFile(filePath, content, 'utf8');
      console.log(`✅ Arquivo corrigido: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Erro ao processar arquivo ${filePath}:`, error);
  }
}

async function findTsxFiles(directory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        await findTsxFiles(fullPath);
      } else if (entry.name.endsWith('.tsx') && 
                 entry.name !== 'page-transition.tsx' && 
                 fullPath.includes('/app/')) {
        await fixPageFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`Erro ao ler diretório ${directory}:`, error);
  }
}

async function main() {
  try {
    console.log('Iniciando correção dos arquivos de página...');
    await findTsxFiles('./app');
    console.log('Processo de correção concluído!');
  } catch (error) {
    console.error('Erro ao executar o script:', error);
  }
}

main(); 