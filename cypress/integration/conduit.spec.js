describe('the conduit app', () => {
    it('shows some posts', () => {
      cy.visit("http://angular.realworld.io/")
      cy.get('.article-preview').should('have.length', 10)
    })
  })