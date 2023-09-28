describe('Page load', () => {
  it('Loads the main view', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Web Metrics')
  })
})

describe('Form validation', () => {
  it('Validates form fields', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').click()
    cy.contains('Please enter a URL')
    cy.get('input#url').type('abc')
    cy.get('button').click()
    cy.contains('Please enter a valid URL')
    cy.get('input#url').type('https://www.cypress.io/')
    cy.contains('Please enter a valid URL').should('not.exist')
  })
})