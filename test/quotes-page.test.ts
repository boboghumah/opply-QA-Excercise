
import { QuotesPage } from '../src/pages/quotes/quotes.page';
import { TestData } from '../src/utils/data';
import { LoginPage } from '../src/pages/login/login.page';


const loginPage = new LoginPage();
const quotesPage = new QuotesPage();
const data = new TestData().user;


fixture(' Quotes page ').page(quotesPage.pageUrl());

test.before(async (t) => {
  await t.maximizeWindow();

  await loginPage.enterUserName(data.email);
  await loginPage.enterPassword(data.password);
  await loginPage.clickLoginButton();

  await quotesPage.clickSuppliersNavigationLink();

})('Verify that Quotes page is displayed correctly ', async (t) => {

  // Verify the Quotes page title
  await t.expect(quotesPage.pageTitle.textContent).contains("Quotes")

   // Get all the list of all the quotes
  const quotesList = quotesPage.quotesList
  const quotesListCount = await quotesList.count

   // Iterate through the list of quotes 
  for (let i = 0; i < quotesListCount; i++) {
    const supplierListItem = quotesList.nth(i);
    const qouteDetails = quotesPage.quotesListDetails

    // Verify the name of each quote
    await t.expect(supplierListItem.textContent).contains('Quote for');

    // Verify the detailed in formation of each quote
    await t.expect(qouteDetails.textContent)
      .contains("Amount:")
    await t.expect(qouteDetails.nextSibling().textContent)
      .contains("Created:")



  }


});




