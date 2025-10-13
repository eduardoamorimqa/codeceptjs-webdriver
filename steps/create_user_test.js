var validacao = require('assert');

const {I, home_page, login_page, create_user_page, my_account_page} = inject()

Feature('Create User');

Scenario('Login with success', async ({ login }) => {
    await login('user');
})

Scenario('Validate E-mail On Create User', async () => {
    const { faker } = await import('@faker-js/faker');

    // Gere os dados aleatórios
    var firstName = faker.person.firstName();
    var lastName = faker.person.lastName();

    I.amOnPage('/11')

    // home
    home_page.accessLoginPage()
    
    //login
    login_page.submitCreateNewAccount(faker.internet.email())
    
    var title = await I.grabTitle()
    validacao.equal(title, 'Login - My Shop')

    // create user
    create_user_page.fillFieldsCreateUser(firstName, lastName)
    create_user_page.createUser()    

    // my account
    my_account_page.validateUserLogged(firstName, lastName)    
});