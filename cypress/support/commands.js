import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

Cypress.Commands.add('login', (username, password) => {
  loginPage.visit();
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
  loginPage.submit();
  productsPage.assertPageVisible();
});

Cypress.Commands.add('addProductToCart', (productName) => {
  productsPage.addProductToCart(productName);
});
