const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    if (content.includes('<PageTransition>')) {
      console.log(`Corrigindo: ${filePath}`);
      
      // Remover o import de PageTransition
      let updatedContent = content.replace(
        /import PageTransition from ["']@\/components\/ui\/page-transition["'];?\n/,
        ''
      );
      
      // Substituir as tags de PageTransition por React Fragment
      updatedContent = updatedContent.replace('<PageTransition>', '<>');
      updatedContent = updatedContent.replace('</PageTransition>', '</>');
      
      await writeFile(filePath, updatedContent, 'utf8');
      console.log(`✅ Arquivo corrigido: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Erro ao processar arquivo ${filePath}:`, error);
  }
}

async function findTsxFiles(directory) {
  try {
    const files = await readdir(directory, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = path.join(directory, file.name);
      
      if (file.isDirectory()) {
        await findTsxFiles(filePath);
      } else if (file.name.endsWith('.tsx') && !file.name.includes('page-transition')) {
        await processFile(filePath);
      }
    }
  } catch (error) {
    console.error(`Erro ao ler diretório ${directory}:`, error);
  }
}

async function main() {
  try {
    console.log('Iniciando substituição do PageTransition por React Fragment...');
    await findTsxFiles('./app');
    console.log('Processo concluído!');
  } catch (error) {
    console.error('Erro ao executar o script:', error);
  }
}

main(); 