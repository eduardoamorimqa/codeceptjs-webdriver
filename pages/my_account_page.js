const { I } = inject();

module.exports = {

  button: {
    userName: '.header_user_info'
  },

  validateUserLogged(firstName, lastName) {
     I.waitForElement('.header_user_info')
     I.see(`${firstName} ${lastName}`)
  }
}
