const {
  setHeadlessWhen,
  //setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
//setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automacao-codeceptjs-web',
  tests: './steps/login_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://www.automationpractice.pl/index.php',
      browser: 'chrome',
      waitForTimeout: 5000,
      logLevel: 'error',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--window-size=1920,1200',
            '--disable-logging',
            '--log-level=3'
            //"--headless"
          ]
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js',
    login_page: './pages/login_page.js',
    create_user_page: './pages/create_user_page.js',
    my_account_page: './pages/my_account_page.js',
  },
  bootstrap: require('./server/server.js').bootstrap,
  teardown: require('./server/server.js').teardown,
  mocha: {},
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    // mocha: {
    //   reporterOptions: {

    //   }
    // },
    stepByStepReport: {
      enabled: false,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: false
    },
    auth: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          // loginAdmin function is defined in 'steps_file.js'
          login: async (I) => {
            I.amOnPage('/');
            I.click('.login')
            I.waitForElement('#email', 10)
            I.fillField('#email', 'marcelomattos@gmail.com')
            I.waitForElement('#passwd', 10)
            I.fillField('#passwd', secret('123456'))
            I.click('#SubmitLogin')
          },
          // if we see 'Admin' on page, we assume we are logged in 
          check: async (I) => {
            I.amOnPage('/');
            I.see('Marcelo Mattos');
          }
        }
      }
    }
  },
}