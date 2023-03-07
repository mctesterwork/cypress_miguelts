describe('Attempts to login with invalid password', () => {
    it('Navigates to my account page, fills required fields', () => {
        cy.visit('https://migueltestingsite.com')
        cy.get('a[href="https://migueltestingsite.com/my-account"]').first().should('have.text', 'My account')
            .click()

        cy.get('input[id="username"]').should('have.class', 'input-text')
            .focus()
            .type('joseph30')

        cy.get('input[id="password"]').should('have.class', 'input-text')
            .focus()
            .type('drowssap')

        cy.get('input[id="rememberme"]').should('have.value', 'forever')
            .click({force: true})

        cy.get('button[name="login"]').should('have.text', 'Log in')
            .click()
        
        // Check the error message is displayed.
        cy.get('ul[role="alert"]').should('include.text', 'is not registered on this site')
})
})