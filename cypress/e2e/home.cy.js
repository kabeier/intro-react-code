beforeEach(() => {
  cy.visit('/')
})

it('should have a heading', () => {
  cy.get('header').should('be.visible')
})

it('starts with an empty poke container', () => {
  cy.get('#poke-container').children().should('have.length', 0)
})

it('changes the title when you click Change Title', () => {
  cy.get('header button').click()
  cy.get('header h1').should('have.text', 'Pokemon Project: Day 2')
})