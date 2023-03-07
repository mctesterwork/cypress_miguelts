describe('Shop page interactions', () => {
    beforeEach(() => {
        cy.visit('https://migueltestingsite.com')
    })


it('Shop - Order items by price: Low to High', () => {
    cy.get('a[href="https://migueltestingsite.com/shop"]')
        .first()
        .should('have.text', 'Shop')
        .click()

    cy.get('.woocommerce-ordering > .orderby')
        .first()
        .select('Sort by price: high to low', {force: true})

    cy.get('.woocommerce-LoopProduct-link')
        .first()
        .should('include.text', 'Very Ugly Doll')
})

})