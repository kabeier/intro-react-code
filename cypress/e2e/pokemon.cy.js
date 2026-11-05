beforeEach(() => {
  cy.visit('/')
})

it('should render a Pokemon card for the user\'s search', () => {
  cy.get('input[id=pokemon-name]').type('Bulbasaur')
  cy.get('button[type=submit]').click()
  cy.get('#bulbasaur-card').should('be.visible')
  cy.get('#bulbasaur-card img').should('have.attr', 'alt', 'bulbasaur')
  cy.get('#bulbasaur-card img').should('have.attr', 'src').and('not.include', 'shiny')
})