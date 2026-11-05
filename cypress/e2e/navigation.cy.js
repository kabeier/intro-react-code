it('/about renders the About page', () => {
  cy.visit('/about')
  cy.contains('h2', 'About This App')
  cy.get('header').should('be.visible')
})

it('shows a 404 page for an unknown route', () => {
  cy.visit('/this-page-does-not-exist')
  cy.contains('h2', '404 - Page Not Found')
})

it('shows the error page inside the layout when a page crashes', () => {
  cy.visit('/about')
  cy.contains('button', 'Test errorElement').click()
  cy.contains('h2', 'Something went wrong')
  cy.get('header').should('be.visible')
})

it('navigates with the navbar without reloading the page', () => {
  cy.visit('/')
  cy.window().then((win) => { win.noReload = true })
  cy.get('nav').contains('a', 'About').click()
  cy.location('pathname').should('eq', '/about')
  cy.window().its('noReload').should('eq', true)
})

it('shows the nav links', () => {
  cy.visit('/')
  cy.contains('nav a', 'About').should('be.visible')
})


it('keeps searched cards after visiting another page', () => {
  cy.visit('/')
  cy.get('input[id=pokemon-name]').type('Bulbasaur{enter}')
  cy.get('#bulbasaur-card').should('be.visible')
  cy.get('nav').contains('a', 'About').click()
  cy.get('nav').contains('a', 'Home').click()
  cy.get('#bulbasaur-card').should('be.visible')
})


it('does not bring Pikachu back after it was removed', () => {
  cy.visit('/')
  cy.get('#pikachu-card button').contains('Remove').click()
  cy.get('nav').contains('a', 'About').click()
  cy.get('nav').contains('a', 'Home').click()
  cy.get('input[id=pokemon-name]').type('Charizard{enter}')
  cy.get('#charizard-card').should('be.visible')
  cy.get('#poke-container').children().should('have.length', 1)
})