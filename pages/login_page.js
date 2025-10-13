const { I } = inject();

module.exports = {

  fileds: {
    emailAddressRegisterField: '#email_create'
  },

  button: {
    createAccountButton: '#SubmitCreate'
  },

  messages: {

  },
  
  submitCreateNewAccount(email) {
    I.fillField(this.fileds.emailAddressRegisterField, email)
    I.click(this.button.createAccountButton)
  }
}