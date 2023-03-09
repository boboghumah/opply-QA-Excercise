import { Selector, ClientFunction, t } from 'testcafe';
import { Page } from '../page';

export class QuotesPage extends Page {

  public pageTitle = Selector('.quotes-view .text-success');
  public quotesList = Selector('.quotes-view').find('.quotes-list .quotes-list__item');
  public quotesListDetails = Selector('.list-group-item');


  constructor() {
    super('');
  }

  async clickSuppliersNavigationLink() {
    await t.
      click(this.navlink.withText('Quotes'))
  };


};
