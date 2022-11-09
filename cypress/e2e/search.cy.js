describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://aprass.studio')
    cy.get('.header__nav__option > .search-switch > .fa').click()
    cy.get('#search-input').type("lite{enter}")
  })
})