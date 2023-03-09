import { SignUpPage } from '../src/pages/signup/signup.page';
import * as randomEmail from "random-email";
import * as randomName from "random-name";
const moment = require('moment');

const firstName = randomName.first();
const lastName = randomName.last();
const randomDomain = `${firstName}.op`;
const userEmail = `${randomEmail({ domain: randomDomain })}`;
const password = userEmail + '1234';

const signUpPage = new SignUpPage();


fixture(' User Sign up').page(signUpPage.pageUrl());

test.before(async (t) => {
  await t.maximizeWindow();

})('Verify that customers can sign up successfully', async (t) => {

  //Click the sign up link
  await signUpPage.clickSignUpLink();

  // Verify the sign up page title
  await t.expect(signUpPage.pageTitle.textContent).contains("Signup")

  //Enter the user first name
  await signUpPage.enterFirstName(firstName);

  //Enter the user last name
  await signUpPage.enterLastName(lastName);

  //Enter the user email 
  await signUpPage.enterEmail(userEmail);

  //Enter the user password
  await signUpPage.enterPassword(password);

  //Click the sign up button
  await signUpPage.clickSignUpButton();


});




