import { Selector, ClientFunction, t } from 'testcafe';
import { Page } from '../page';

export class SignUpPage extends Page {

  private signupLink = Selector("[href='/signup']");
  public pageTitle = Selector('.signup-view .text-success');
  private fieldLabels = Selector("[for='first-name']")
  private firstNameField = Selector('#first-name');
  private lastNameField = Selector('#last-name');
  private emailField = Selector('#email');
  private passwordField = Selector('#password');
  private signUpButton = Selector('.btn-primary');



  constructor() {
    super('');
  }

  async clickSignUpLink() {
    await t.
      click(this.signupLink)
  };

  async enterFirstName(firstName) {
    await t.
      typeText(this.firstNameField, firstName)
  };

  async enterLastName(lastName) {
    await t.
      typeText(this.lastNameField, lastName)
  };

  async enterEmail(email) {
    await t.
      typeText(this.emailField, email)
  };

  async enterPassword(password) {
    await t.
      typeText(this.passwordField, password)
  };

  async clickSignUpButton() {
    await t
      .expect(this.signUpButton.visible).ok()
      .click(this.signUpButton)

  };
};
