describe('Searches for a doll', () => {
  beforeEach(() => {
    cy.visit('https://migueltestingsite.com')
  })
  it('Types "just woke" in the searchbox and validates the result', () => {
    cy.get('input[type="search"]').first()
      .type('just woke\n')
    cy.get('.product_title')
      .should('have.text', 'Just-woke-up Doll')
  })
  it('Types "nothing" in the searchbox and validates the result', () => {
    cy.get('input[type="search"]').first()
      .type('nothing\n')

    cy.get('.woocommerce-info')
      .should('include.text', 'No products were found matching your selection.')
  })
})