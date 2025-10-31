import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import users from '../fixtures/users.json';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

describe('SauceDemo Login', () => {
  it('shows an error for a locked-out user', () => {
    const { username, password } = users.lockedOut;

    loginPage.visit();
    loginPage.fillUsername(username);
    loginPage.fillPassword(password);
    loginPage.submit();
    loginPage.assertErrorMessage('Sorry, this user has been locked out.');
  });

  it('logs in successfully with valid credentials and loads the products page', () => {
    const { username, password } = users.standard;

    cy.login(username, password);
    productsPage.assertInventoryCount(6);
    productsPage.assertCartCount(0);
  });
});
