const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    console.log(`Analisando: ${filePath}`);
    console.log(`  Contém <PageTransition>: ${content.includes('<PageTransition>')}`);
    console.log(`  Contém import: ${content.includes("import PageTransition from")}`);
    
    // Verifica se o arquivo usa PageTransition sem importá-lo
    if (content.includes('<PageTransition>') && 
        !content.includes("import PageTransition from")) {
      
      console.log(`Corrigindo: ${filePath}`);
      
      // Adiciona a importação no topo do arquivo após as importações existentes
      let updatedContent;
      
      if (content.includes("import ")) {
        // Se já existem imports, adiciona após o último
        updatedContent = content.replace(
          /(import[\s\S]*?from[\s\S]*?["'].*["'][\s\S]*?)(\n\n|$)/,
          '$1\nimport PageTransition from "@/components/ui/page-transition"\n\n'
        );
      } else {
        // Se não existem imports, adiciona no início
        updatedContent = `import PageTransition from "@/components/ui/page-transition"\n\n${content}`;
      }
      
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
    console.log('Iniciando correção dos imports...');
    await findTsxFiles('./app');
    console.log('Processo concluído!');
  } catch (error) {
    console.error('Erro ao executar o script:', error);
  }
}

main(); 