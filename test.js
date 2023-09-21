const { chromium } = require('playwright');
const assert = require('assert');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navegue até a página do Google
  await page.goto('https://www.google.com/');

  // Clique em Aceitar os termos do Google
  await page.click('#L2AGLb');

  // Digite o texto a ser pesquisado
  await page.fill('#APjFqb', 'QA Week 2023');

  // Clique no botão pesquisar
  await page.press('#APjFqb', 'Enter');

  // Clique no link do evento QA Week 2023
  await page.click('text=QA Week 2023 - 2ª Temporada');

  // Verifique se estamos na página correta
  const title = await page.title();
  assert.strictEqual(title, 'QA Week 2023 - 1ª Temporada');

  // Feche o browser
  await browser.close();
})();
