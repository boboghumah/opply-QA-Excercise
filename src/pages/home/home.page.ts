import { Selector, ClientFunction, t } from 'testcafe';
import { Page } from '../page';
import { Properties } from '../../utils/properties';

export class HomePage extends Page {

  private closeDialogButton = Selector('.dDYU-close');
  private originInputField = Selector('.zEiP-origin');
  private destinationInputField = Selector('.zEiP-destination');
  private inputFields = Selector('.k_my-input');
  private OptionCheckBox = Selector('.JyN0-name');

  private adultOptions = Selector('.PLU8').nth(0);
  private adultOptionsSelector = Selector('.u9Xa button.bCGf-mod-theme-default').nth(1);

  private dapatureDateField = Selector('span.cQtq-date').nth(1);
  private previousMonthIcon = Selector("[aria-label='Previous month']");

  private searchButton = Selector('.zEiP-submit');
  private mainWebsiteLink = Selector('.UKS8-redirect-link')


  constructor() {
    super('');
  }


  pageUrl(baseUrl: string = Properties.getProperties().baseUrl) {
    return baseUrl;
  }


  async clickCloseDialogButton() {
    await t.click(this.closeDialogButton);
  };

  async selectFlightOrigin(origin) {
    await t
      .expect(this.originInputField.exists).ok({ timeout: 7000 })
      .click(this.originInputField)
      .expect(this.inputFields.exists).ok({ timeout: 5000 })
    await t.
      typeText(this.inputFields, origin)
      .click(this.OptionCheckBox.withText(origin));
  };

  async selectFlightDestination(destination) {
    await t
      .click(this.destinationInputField)
      .typeText(this.inputFields, destination)
      .click(this.OptionCheckBox.withText(destination));
  };

  async chooseNumberOfAdults() {
    await t
      .click(this.adultOptions)
      .click(this.adultOptionsSelector);
  };

  async chooseDepatureDate(depatureDate) {
    await t
      .click(this.dapatureDateField)
      .doubleClick(this.previousMonthIcon)
      .click(Selector(`.onx_-days [aria-label="${depatureDate}"]`));
  };

  async chooseReturnDate(returnDate) {
    await t.click(Selector(`.onx_-days [aria-label="${returnDate}"]`));

  };

  async clickSearchButton() {
    await t.click(this.searchButton);
  };

  async clickMainWebsiteLink() {
    await t
      .click(this.mainWebsiteLink)
      .wait(5000);
  };
};
