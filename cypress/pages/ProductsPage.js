class ProductsPage {
  assertPageVisible() {
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  }

  assertInventoryCount(expectedCount) {
    cy.get('.inventory_item').should('have.length', expectedCount);
  }

  openProductByName(name) {
    cy.contains('.inventory_item_name', name).click();
  }

  addProductToCart(name) {
    cy.contains('.inventory_item', name)
      .should('exist')
      .within(() => {
        cy.contains('button', 'Add to cart').click();
      });
  }

  assertCartCount(expected) {
    if (expected === 0) {
      cy.get('.shopping_cart_badge').should('not.exist');
    } else {
      cy.get('.shopping_cart_badge').should('have.text', String(expected));
    }
  }

  openCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default ProductsPage;
