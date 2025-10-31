/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): Chainable<void>;
    addProductToCart(productName: string): Chainable<void>;
  }
}
