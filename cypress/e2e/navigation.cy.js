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