describe('Navigate to an empty Checkout page', () => {
  beforeEach(() => {
    cy.visit('https://migueltestingsite.com')
    cy.contains('Checkout')
      .click()
  })
  it('Clicks on checkout without adding any items, and then clicks on Return to Shop button', () => {
    cy.get('.woocommerce-info')
      .should('have.text', 'Your cart is currently empty.')

    cy.get('.wc-backward')
      .should('include.text', 'Return to shop')
      .click()
    
      cy.get('.page-title').should('have.text', 'Shop')
  })
})