import { Selector } from 'testcafe';
import { SuppliersPage } from '../src/pages/suppliers/suppliers.page';
import { TestData } from '../src/utils/data';
import { LoginPage } from '../src/pages/login/login.page';


const loginPage = new LoginPage();
const suppliersPage = new SuppliersPage();
const data = new TestData().user;


fixture(' Suppliers page ').page(suppliersPage.pageUrl());

test.before(async (t) => {
  await t.maximizeWindow();

  await loginPage.enterUserName(data.email);
  await loginPage.enterPassword(data.password);
  await loginPage.clickLoginButton();

  await suppliersPage.clickSuppliersNavigationLink();

})('Verify that Suppliers page is displayed correctly ', async (t) => {

  // Verify the Suppliers page title
  await t.expect(suppliersPage.pageTitle.textContent).contains("Suppliers")


  // Get all the list of all suppliers
  const suppliersList = suppliersPage.suppliersList
  const suppliersListCount = await suppliersList.count

  // Iterate through the list of suppliers 
  for (let i = 0; i < suppliersListCount; i++) {
    const supplierListItem = suppliersList.nth(i);
    
    // Verify the name of each suppliers name on the list
    await t.expect(supplierListItem.textContent).contains('Supplier of');
    await t.click(supplierListItem.find('a'))

    // Verify the supplier's details page 
    await t.expect(suppliersPage.supplierDetailsPageTitle.textContent).contains("View Supplier")
    await suppliersPage.clickSuppliersNavigationLink();


  }


});




