it('/about renders the About page', () => {
  cy.visit('/about')
  cy.contains('h2', 'About This App')
  cy.get('header').should('be.visible')
})

it('shows a 404 page for an unknown route', () => {
  cy.visit('/this-page-does-not-exist')
  cy.contains('h2', '404 - Page Not Found')
})