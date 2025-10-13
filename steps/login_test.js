const { I } = inject()

Feature('Login');

Scenario('Validate Empty E-mail On Create Account 1', ({ I }) => {
    I.amOnPage('/')
    I.click('.login')
    I.click('#SubmitCreate')
    I.see('Invalid email address.')    
});

Scenario('Validate Empty E-mail On Create Account 2', ({ I }) => {
    I.amOnPage('/')
    I.click('.login')       
});

Scenario('Validate Empty E-mail On Create Account 3', ({ I }) => {
    I.amOnPage('/')
    I.click('.login')      
});




