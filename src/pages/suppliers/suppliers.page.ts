import { Selector, ClientFunction, t } from 'testcafe';
import { Page } from '../page';

export class SuppliersPage extends Page {

  public pageTitle = Selector('.suppliers-view .text-success');
  public supplierDetailsPageTitle = Selector('.single-supplier-view .text-success');
  public suppliersList = Selector('.suppliers-view').find('.suppliers-list .list-group-item');


  constructor() {
    super('');
  }

  async clickSuppliersNavigationLink() {
    await t.
      click(this.navlink.withText('Suppliers'))
  };

  
};
