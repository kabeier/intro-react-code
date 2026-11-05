it('/about renders the About page', () => {
  cy.visit('/about')
  cy.contains('h2', 'About This App')
  cy.get('header').should('be.visible')
})