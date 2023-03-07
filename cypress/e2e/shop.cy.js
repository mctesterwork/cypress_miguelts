describe('Shop page interactions', () => {
    beforeEach(() => {
        cy.visit('https://migueltestingsite.com')
        cy.get('a[href="https://migueltestingsite.com/shop"]')
            .first()
            .should('have.text', 'Shop')
            .click()
    })


it('Shop - Order items by price: Low to High', () => {
    

    cy.get('.woocommerce-ordering > .orderby')
        .first()
        .select('Sort by price: high to low', {force: true})

    cy.get('.woocommerce-LoopProduct-link')
        .first()
        .should('include.text', 'Very Ugly Doll')
})

it('Shop - Add multiple products to cart', () => {
    cy.get('.add_to_cart_button')
        .first()
        // We add two of these by clicking on the button twice
        .click()
        .click()

    cy.get('.add_to_cart_button')
        .last()
        .click()
    //TODO: Fix issue with checking the cart contents
    cy.get('.cart-contents')
})

})