import ProductsPage from '../pages/ProductsPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import users from '../fixtures/users.json';

const productsPage = new ProductsPage();
const productDetailsPage = new ProductDetailsPage();
const cartPage = new CartPage();

describe('SauceDemo Product Navigation', () => {
  beforeEach(() => {
    const { username, password } = users.standard;
    cy.login(username, password);
  });

  it('opens a product, validates details, and adds it to the cart', () => {
    const productName = 'Sauce Labs Backpack';

    productsPage.openProductByName(productName);
    productDetailsPage.assertProductName(productName);
    productDetailsPage.assertProductDescriptionContains('streamlined');
    productDetailsPage.addToCart();
    productDetailsPage.goBackToList();

    productsPage.assertCartCount(1);
    productsPage.openCart();

    cartPage.assertCartUrl();
    cartPage.assertItemsCount(1);
    cartPage.assertItemPresent(productName);
  });

  it('adds multiple products to the cart using a reusable command', () => {
    cy.addProductToCart('Sauce Labs Backpack');
    cy.addProductToCart('Sauce Labs Bike Light');

    productsPage.assertCartCount(2);
    productsPage.openCart();

    cartPage.assertItemsCount(2);
    cartPage.assertItemPresent('Sauce Labs Backpack');
    cartPage.assertItemPresent('Sauce Labs Bike Light');
  });
});
