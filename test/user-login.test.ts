import { LoginPage } from '../src/pages/login/login.page';
import { TestData } from '../src/utils/data';


const loginPage = new LoginPage();
const data = new TestData().user;


fixture(' User Login up ').page(loginPage.pageUrl());

test.before(async (t) => {
  await t.maximizeWindow();

})('Verify that users can login successfully', async (t) => {

  // Verify the login up page title
  await t.expect(loginPage.pageTitle.textContent).contains("Login")

  //Enter the user name
  await loginPage.enterUserName(data.email);

  //Enter the password
  await loginPage.enterPassword(data.password);

  //Click the sign up button
 await loginPage.clickLoginButton();
   
  
});




