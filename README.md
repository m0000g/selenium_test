# selenium_test

This repo is used for learning how to use selenium from scratch.

# Selenium

Website: [https://www.selenium.dev/](https://www.selenium.dev/)

Selenium is a popular open-source tool used for automating web browsers. It allows developers to write scripts in several programming languages like Java, C#, Python, etc. This can be used to automate processes like form submissions, clicking buttons, or testing for website bugs.

# Available products

- Selenium WebDriver: robust, browser-based regression automation suites and tests, scale and distribute scripts across many environments.
- Selenium ID: Browser add-on simple to record and play (I have used this one before)
- Selenium Grid: Scale by distributing and running tests on several machines and environments from a central point. Test againts a vast combination of browsers/OS.

# WebDriver API

## Installation and Usage of Selenium on Windows

Selected language: JavaScript

1. **Install Node.js**:

   - If it's not installed on your system, download the installer from the official Node.js website (nodejs.org).
   - Run the installer, which includes the Node Package Manager (npm), and follow the installation prompts, making sure to include npm and add Node.js to your PATH if prompted.

   Note: Already installed? Check your version with the command `node --version`

2. **Install Selenium WebDriver**:

   - Open a command prompt (CMD) or PowerShell as an administrator.
   - Use **`npm`** to install the Selenium WebDriver package by typing the following command:

     ```
     npm install selenium-webdriver --save
     ```

   - The **`-save`** flag adds the Selenium WebDriver as a dependency in your project's **`package.json`** file.

3. **Download Browser Drivers**:
   - You'll need to download the WebDriver for the browser you want to automate. Each major browser has its own driver:
     - **Chrome**: [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/)
     - **Firefox**: [GeckoDriver](https://github.com/mozilla/geckodriver/releases)
     - **Edge**: [EdgeDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)
   - Download the appropriate driver for your browser and ensure that it matches the version of the browser you're using.
   - Extract the downloaded driver to a known location on your machine.
4. **Update System PATH**: You need to add the directory containing the WebDriver executable to your system's PATH environment variable. This allows your test scripts to launch the browser directly.
   - Right-click on 'This PC' or 'My Computer' on the desktop or in File Explorer.
   - Click on 'Properties'.
   - Click on 'Advanced system settings'.
   - In the System Properties window, click on the 'Environment Variables...' button.
   - In the System Variables section, scroll down and select the 'Path' variable, then click 'Edit...'.
   - In the Edit Environment Variable window, click 'New' and add the path to the folder where you extracted your WebDriver.
   - Click 'OK' to close each window.
     Note: check if the path is ok, open a command window and then type `echo %PATH%`
5. **Create a Test Script**:

   - Create a new JavaScript file to test your Selenium setup, for example, **`test_selenium.js`**.
   - Use the following example code to open a browser and navigate to a webpage:

     ```jsx
     const { Builder } = require('selenium-webdriver');

     (async function example() {
       let driver = await new Builder().forBrowser('chrome').build();
       try {
         // Navigate to Google
         await driver.get('http://www.google.com');

         // Get the title and print it to the console
         let title = await driver.getTitle();
         console.log(title);
       } finally {
         // Quit the browser after the operation
         await driver.quit();
       }
     })();
     ```

   - In the script, replace **`'chrome'`** with **`'firefox'`** or **`'edge'`** depending on which browser you want to automate.
     Note: if doesn’t work with `‘edge’` try `‘MicrosoftEdge’`.

6. **Run the Test Script**:

   - Open a command prompt or PowerShell window, navigate to the directory containing your test script, and run it with Node.js:

     ```jsx
     node selenium_test.js
     ```

   - This should open the browser, navigate to Google, print the page title, and then close the browser.
