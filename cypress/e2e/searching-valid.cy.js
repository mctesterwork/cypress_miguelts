describe('Searches for a doll', () => {
  it('Types "just woke" in the searchbox and validates the result', () => {
    cy.visit('https://migueltestingsite.com')
    cy.get('input[type="search"]').first()
    .type('just woke\n')
    cy.get('.product_title').should('have.text', 'Just-woke-up Doll')
  })
})