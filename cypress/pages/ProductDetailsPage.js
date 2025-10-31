class ProductDetailsPage {
  assertProductName(name) {
    cy.get('.inventory_details_name').should('have.text', name);
  }

  assertProductDescriptionContains(text) {
    cy.get('.inventory_details_desc').should('contain', text);
  }

  addToCart() {
    cy.contains('button', 'Add to cart').click();
  }

  goBackToList() {
    cy.get('[data-test="back-to-products"]').click();
  }
}

export default ProductDetailsPage;
