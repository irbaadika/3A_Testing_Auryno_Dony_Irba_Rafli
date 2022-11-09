describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://aprass.studio')
    cy.get('.header__top__right > :nth-child(1) > a').click()
    cy.get('#username').type("newuser")
    cy.get('#password').type("password123")
    cy.get('#signinbtn').click()
    cy.get('.header__nav__option > .dropdown > #dLabel > #profile').click()
    cy.get('.header__nav__option > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
  })
})