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

it('should render MULTIPLE Pokemon cards', () => {
  cy.get('input[id=pokemon-name]').type('Bulbasaur{enter}')
  cy.get('input[id=pokemon-name]').type('Charizard{enter}')
  cy.get('#bulbasaur-card').should('be.visible')
  cy.get('#charizard-card').should('be.visible')
})

it('clears the input after a search', () => {
  cy.get('input[id=pokemon-name]').type('Bulbasaur{enter}')
  cy.get('input[id=pokemon-name]').should('have.value', '')
})