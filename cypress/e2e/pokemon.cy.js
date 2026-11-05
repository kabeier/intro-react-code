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

it('does nothing on an empty search', () => {
  const alerts = []
  cy.on('window:alert', (text) => alerts.push(text))
  cy.get('button[type=submit]').click()
  cy.wait(1000)
  cy.wrap(alerts).should('have.length', 0)
})

it('does not add the same Pokemon twice', () => {
  cy.get('input[id=pokemon-name]').type('Bulbasaur{enter}')
  cy.get('#bulbasaur-card').should('be.visible')
  cy.get('input[id=pokemon-name]').type('Bulbasaur{enter}')
  cy.get('input[id=pokemon-name]').type('Charizard{enter}')
  cy.get('#charizard-card').should('be.visible')
  cy.get('[id="bulbasaur-card"]').should('have.length', 1)
})

it('alerts when a Pokemon does not exist', () => {
  const alerts = []
  cy.on('window:alert', (text) => alerts.push(text))
  cy.get('input[id=pokemon-name]').type('pikachoo{enter}')
  cy.wrap(alerts).should('include', 'Pokemon Does not Exist')
})

it('can remove a card', () => {
  cy.get('input[id=pokemon-name]').type('Bulbasaur{enter}')
  cy.get('#bulbasaur-card button').contains('Remove').click()
  cy.get('#bulbasaur-card').should('not.exist')
})

it('makes only one card shiny', () => {
  cy.get('#pikachu-card').should('be.visible')
  cy.get('input[id=pokemon-name]').type('Bulbasaur{enter}')
  cy.get('#bulbasaur-card button').contains('Make Shiny').click()
  cy.get('#bulbasaur-card img').should('have.attr', 'src').and('include', 'shiny')
  cy.get('#pikachu-card img').should('have.attr', 'src').and('not.include', 'shiny')
  cy.get('#bulbasaur-card button').contains('Make Normal').click()
  cy.get('#bulbasaur-card img').should('have.attr', 'src').and('not.include', 'shiny')
})

it('keeps a card shiny when another card is removed', () => {
  cy.get('#pikachu-card').should('be.visible')
  cy.get('input[id=pokemon-name]').type('Bulbasaur{enter}')
  cy.get('#bulbasaur-card button').contains('Make Shiny').click()
  cy.get('#pikachu-card button').contains('Remove').click()
  cy.get('#pikachu-card').should('not.exist')
  cy.get('#bulbasaur-card img').should('have.attr', 'src').and('include', 'shiny')
})