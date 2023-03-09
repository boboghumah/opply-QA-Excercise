import { Selector, ClientFunction, t } from 'testcafe';
import { Page } from '../page';

export class LoginPage extends Page {

  private signupLink = Selector("[href='/signup']");
  public pageTitle = Selector('.login-view .text-success');
  private fieldLabels = Selector("[for='first-name']")
  // private firstNameField = Selector('#first-name');
  // private lastNameField = Selector('#last-name');
  private userNameField = Selector('#user');
  private passwordField = Selector('#password');
  private loginButton = Selector('.btn-primary');



  constructor() {
    super('');
  }

  async clickSignUpLink() {
    await t.
      click(this.signupLink)
  };

  async enterUserName(userName) {
    await t.
      typeText(this.userNameField, userName)
  };

  async enterPassword(password) {
    await t.
      typeText(this.passwordField, password)
  };

  async clickLoginButton() {
    await t
      .expect(this.loginButton.visible).ok()
      .click(this.loginButton)

  };
};
