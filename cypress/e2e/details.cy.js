it('reads the id from the URL', () => {
  cy.visit('/pokemon/25')
  cy.contains('h2', '#25')
})


it('shows the Pokemon from the API', () => {
  cy.visit('/pokemon/25')
  cy.contains('h2', 'pikachu')
  cy.get('img[alt=pikachu]').should('be.visible')
  cy.contains('Type: electric')
})


it('shows a message for an unknown Pokemon', () => {
  cy.visit('/pokemon/99999')
  cy.contains('Pokemon not found')
})