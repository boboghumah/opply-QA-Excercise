
import { Selector, t } from 'testcafe';
import { Properties } from '../utils/properties';


export abstract class Page {
  public navlink = Selector('.nav-link');


  protected constructor(public route: string) { }

  pageUrl(baseUrl: string = Properties.getProperties().baseUrl): string {
    return baseUrl;
  }


}
