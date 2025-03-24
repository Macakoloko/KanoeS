const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const BASE_URL = 'http://localhost:3000';
const TIMEOUT = 5000; // 5 segundos

async function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const req = protocol.get(url, (res) => {
      const { statusCode } = res;
      let error;
      
      if (statusCode !== 200) {
        error = new Error(`Status Code: ${statusCode}`);
      }
      
      if (error) {
        console.error(`Falha: ${url} - ${error.message}`);
        res.resume(); // Consume response data to free up memory
        resolve(false);
        return;
      }
      
      res.on('data', () => {});
      res.on('end', () => {
        resolve(true);
      });
    }).on('error', (err) => {
      console.error(`Erro: ${url} - ${err.message}`);
      resolve(false);
    });
    
    req.setTimeout(TIMEOUT, () => {
      req.destroy();
      console.error(`Timeout: ${url}`);
      resolve(false);
    });
  });
}

async function main() {
  try {
    // Rotas para testar (sem a extensão .tsx)
    const routes = [
      '/',
      '/sobre',
      '/servicos',
      '/portfolio',
      '/contato',
      '/fale-conosco',
      '/politica-de-privacidade',
      '/termos-de-uso',
      '/servicos/desenvolvimento-web',
      '/servicos/desenvolvimento-apps',
      '/servicos/marketing-digital',
      '/servicos/seo',
      '/servicos/redes-sociais',
      '/servicos/analise-dados',
      '/servicos/desenvolvimento-web/sites-institucionais',
      '/servicos/desenvolvimento-web/e-commerce',
      '/servicos/desenvolvimento-web/aplicacoes-web',
      '/servicos/desenvolvimento-apps/ios-android',
      '/servicos/desenvolvimento-apps/e-commerce',
      '/servicos/desenvolvimento-apps/corporativos',
      '/portfolio/redesign-site-corporativo',
      '/portfolio/ecommerce-premium',
      '/portfolio/aplicativo-mobile',
      '/portfolio/plataforma-cursos-online',
      '/portfolio/app-delivery',
      '/portfolio/campanha-midia-paga',
      '/portfolio/campanha-marketing-digital',
      '/portfolio/otimizacao-seo',
      '/portfolio/estrategia-redes-sociais'
    ];
    
    console.log(`Verificando ${routes.length} rotas...`);
    
    let succeeded = 0;
    let failed = 0;
    
    for (const route of routes) {
      const url = BASE_URL + route;
      
      process.stdout.write(`Verificando ${url}... `);
      const result = await checkUrl(url);
      
      if (result) {
        process.stdout.write('✅ OK\n');
        succeeded++;
      } else {
        process.stdout.write('❌ Falha\n');
        failed++;
      }
    }
    
    console.log('\nResumo:');
    console.log(`✅ ${succeeded} URLs funcionando corretamente`);
    console.log(`❌ ${failed} URLs com problemas`);
    
  } catch (error) {
    console.error('Erro:', error);
  }
}

console.log('Aguarde 5 segundos para o servidor iniciar completamente...');
setTimeout(() => {
  main();
}, 5000); 