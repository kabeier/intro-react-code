beforeEach(() => {
  cy.visit('/')
})

it('should have a heading', () => {
  cy.get('header').should('be.visible')
})

it('starts with an empty poke container', () => {
  cy.get('#poke-container').children().should('have.length', 0)
})