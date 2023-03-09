describe('Attempts to comment without entering required fields', () => {
    it('Clicks on comment link, types a comment and hits submit button', () => {
      cy.visit('https://migueltestingsite.com')
      cy.get('a[href="https://migueltestingsite.com/hello-world#comments"]')
        .should('have.text', '1 Comment')
        .click({force: true})
        
      cy.get('textarea[id="comment"]')
        .focus()
        .type('Testing comments')

      cy.get('input[id="submit"]')
        .should('have.value', 'Post Comment')
        .click()
      
      cy.get('.wp-die-message')
        .should('have.text', 'Error: Please fill the required fields.')
    })
  })