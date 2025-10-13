const { I } = inject();
var validacao = require('assert');

module.exports = {

  fileds: {
    firstName: '#customer_firstname',
    lastName: '#customer_lastname',
    password: '#passwd',
    days: '#days',
    months: '#months',
    years: '#years'
  },

  button: {
     male: '#id_gender1',
     register: 'Register'
  },

  messages: {
        
  },

  labels: {
    createAnAccount: '.page-heading'
  },

   fillFieldsCreateUser(firstName, lastName) {
    I.waitForElement(this.fileds.firstName, 10)
    I.see('CREATE AN ACCOUNT')
    I.wait(5);
    I.click(this.button.male)
    I.fillField(this.fileds.firstName, firstName)
    I.fillField(this.fileds.lastName, lastName)
    I.fillField(this.fileds.password, secret('123456'))
    I.selectOption(this.fileds.days, '1')
    I.selectOption(this.fileds.months, '5')
    I.selectOption(this.fileds.years, '1992')
    I.checkOption('#newsletter')    
  },

  createUser() {
    I.click(this.button.register)
  }
}