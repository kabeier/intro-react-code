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

it('counts clicks', () => {
  cy.contains('button', 'Click me!').click().click()
  cy.contains('Total Clicks: 2')
})

it('changes the background when you click', () => {
  cy.contains('button', 'Click me!').click()
  cy.get('body').should('have.css', 'background-color', 'rgb(144, 238, 144)')
})