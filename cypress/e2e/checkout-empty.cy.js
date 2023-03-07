describe('Navigate to an empty Checkout page', () => {
  it('Clicks on checkout without adding any items, and then clicks on Return to Shop button', () => {
    cy.visit('https://migueltestingsite.com')
    cy.contains('Checkout')
    .click()
    cy.get('.woocommerce-info').should('have.text', 'Your cart is currently empty.')
    cy.get('.wc-backward').should('include.text', 'Return to shop')
    .click()
    cy.get('.page-title').should('have.text', 'Shop')
  })
})