const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function main() {
  try {
    // Encontrar todos os arquivos page.tsx no app
    const files = await glob('app/**/*page.tsx');
    console.log(`Encontrados ${files.length} arquivos page.tsx`);

    for (const file of files) {
      const filePath = path.resolve(file);
      console.log(`\nProcessando: ${file}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Remove importação do PageTransition
      if (content.includes('import PageTransition from')) {
        console.log('  - Removendo import do PageTransition');
        content = content.replace(/import PageTransition from .*?;?\n/g, '');
        modified = true;
      }
      
      // Garante que o arquivo tenha "use client"
      if (!content.trim().startsWith('"use client"') && !content.trim().startsWith("'use client'")) {
        console.log('  - Adicionando diretiva "use client"');
        content = `"use client"\n\n${content}`;
        modified = true;
      }
      
      // Salva as alterações
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✓ Arquivo atualizado`);
      } else {
        console.log(`  ✓ Nenhuma alteração necessária`);
      }
    }
    
    console.log('\nProcessamento concluído com sucesso!');
  } catch (error) {
    console.error('Erro:', error);
  }
}

main(); 