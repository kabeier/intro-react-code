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


it('opens the details page from a card', () => {
  cy.visit('/')
  cy.get('#pikachu-card a').contains('Details').click()
  cy.location('pathname').should('eq', '/pokemon/25')
  cy.contains('h2', 'pikachu')
})


it('goes back with the Back button', () => {
  cy.visit('/')
  cy.get('#pikachu-card a').contains('Details').click()
  cy.location('pathname').should('eq', '/pokemon/25')
  cy.get('button[aria-label="Go back"]').click()
  cy.location('pathname').should('eq', '/')
})

it('the browser Back button works too', () => {
  cy.visit('/')
  cy.get('#pikachu-card a').contains('Details').click()
  cy.location('pathname').should('eq', '/pokemon/25')
  cy.go('back')
  cy.location('pathname').should('eq', '/')
})


it('logs in and goes home', () => {
  cy.visit('/login')
  cy.get('#username').type('ash')
  cy.contains('button', 'Log In').click()
  cy.location('pathname').should('eq', '/')
})

it('stays on the login page with an empty name', () => {
  cy.visit('/login')
  cy.contains('button', 'Log In').click()
  cy.location('pathname').should('eq', '/login')
})