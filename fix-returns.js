const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Verificar padrão de erro comum: return seguido por HTML sem elemento container
    if (content.includes('return (') && 
        content.match(/return\s*\(\s*\n\s*{\/\*/) && 
        !content.match(/return\s*\(\s*\n\s*<div>/) && 
        !content.match(/return\s*\(\s*\n\s*<>/)) {
      
      console.log(`Corrigindo retorno em: ${filePath}`);
      
      // Adicionar div container antes do primeiro comentário ou tag
      const updatedContent = content.replace(
        /(return\s*\(\s*\n\s*)({\/*)/,
        '$1<div>\n      $2'
      );

      // Adicionar fechamento da div antes do parêntese de fechamento
      const fixedContent = updatedContent.replace(
        /(\s*\)(\s*\}\s*)?)\s*$/,
        '\n    </div>$1'
      );
      
      await writeFile(filePath, fixedContent, 'utf8');
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
      } else if (entry.name.endsWith('.tsx') && entry.name !== 'page-transition.tsx') {
        await processFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`Erro ao ler diretório ${directory}:`, error);
  }
}

async function main() {
  try {
    console.log('Iniciando correção dos retornos JSX...');
    await findTsxFiles('./app');
    console.log('Processo de correção concluído!');
  } catch (error) {
    console.error('Erro ao executar o script:', error);
  }
}

main(); 