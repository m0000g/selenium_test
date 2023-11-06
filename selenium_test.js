const { Builder } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('MicrosoftEdge').build();
  try {
    // Navigate to Google
    await driver.get('http://www.freshorangedesign.com');

    // Get the title and print it to the console
    let title = await driver.getTitle();
    console.log(title);
  } finally {
    // Quit the browser after the operation
    await driver.quit();
  }
})();
