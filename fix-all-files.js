const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Lista de arquivos específicos que sabemos que têm problemas
const problematicFiles = [
  'app/politica-de-privacidade/page.tsx',
  'app/portfolio/aplicativo-mobile/page.tsx',
  'app/contato/page.tsx',
  'app/fale-conosco/page.tsx',
  'app/portfolio/app-delivery/page.tsx',
  'app/portfolio/campanha-marketing-digital/page.tsx',
  'app/portfolio/campanha-midia-paga/page.tsx',
  'app/portfolio/ecommerce-premium/page.tsx',
  'app/portfolio/estrategia-redes-sociais/page.tsx',
  'app/portfolio/otimizacao-seo/page.tsx',
  'app/portfolio/plataforma-cursos-online/page.tsx',
  'app/portfolio/redesign-site-corporativo/page.tsx',
  'app/not-found.tsx'
];

async function fixFile(filePath) {
  try {
    console.log(`Processando arquivo: ${filePath}`);
    const content = await readFile(filePath, 'utf8');

    // Primeiro, remove a importação do PageTransition
    let updatedContent = content.replace(/import PageTransition from .*?;?\n/g, '');
    
    // Identifica onde começa o return statement
    const returnIndex = updatedContent.indexOf('return (');
    if (returnIndex === -1) {
      console.log(`Não foi encontrado 'return (' em ${filePath}`);
      return;
    }
    
    // Identifica onde deve terminar o JSX retornado
    const lastClosingBrace = updatedContent.lastIndexOf('}');
    
    // Extrai a parte do conteúdo que contém o JSX a ser retornado
    const beforeReturn = updatedContent.substring(0, returnIndex + 'return ('.length);
    const afterReturn = updatedContent.substring(returnIndex + 'return ('.length, lastClosingBrace - 1);
    const afterClosingBrace = updatedContent.substring(lastClosingBrace);
    
    // Remove as tags PageTransition se existirem
    let jsxContent = afterReturn
      .replace(/<PageTransition>/g, '<div>')
      .replace(/<\/PageTransition>/g, '</div>')
      .replace(/<>/g, '<div>')
      .replace(/<\/>/g, '</div>');
    
    // Verifica se o JSX começa com uma tag válida, se não, envolve em uma div
    jsxContent = jsxContent.trim();
    if (!jsxContent.startsWith('<')) {
      jsxContent = `<div>\n      ${jsxContent}\n    </div>`;
    }
    
    // Reconstrói o arquivo
    const finalContent = `${beforeReturn}${jsxContent}\n  )${afterClosingBrace}`;
    
    await writeFile(filePath, finalContent, 'utf8');
    console.log(`✅ Arquivo corrigido: ${filePath}`);
  } catch (error) {
    console.error(`❌ Erro ao processar arquivo ${filePath}:`, error);
  }
}

async function main() {
  try {
    console.log('Iniciando correção dos arquivos com problemas...');
    
    for (const filePath of problematicFiles) {
      await fixFile(filePath);
    }
    
    console.log('Processo de correção concluído!');
  } catch (error) {
    console.error('Erro ao executar o script:', error);
  }
}

main(); 