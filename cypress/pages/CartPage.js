class CartPage {
  assertCartUrl() {
    cy.url().should('include', '/cart.html');
  }

  assertItemsCount(expected) {
    cy.get('.cart_item').should('have.length', expected);
  }

  assertItemPresent(name) {
    cy.contains('.inventory_item_name', name).should('be.visible');
  }
}

export default CartPage;
