// Runs against the BUILT app (npm run build && npm run preview), not the dev server:
// npx cypress run --config "baseUrl=http://localhost:4173/pokemon-app/,specPattern=cypress/e2e-prod/**/*.cy.js"
it('opens a page from its address and survives a refresh', () => {
  cy.visit('/#/about')
  cy.contains('h2', 'About This App')
  cy.reload()
  cy.contains('h2', 'About This App')
})

it('opens a Pokemon from its address', () => {
  cy.visit('/#/pokemon/25')
  cy.contains('h2', 'pikachu')
})