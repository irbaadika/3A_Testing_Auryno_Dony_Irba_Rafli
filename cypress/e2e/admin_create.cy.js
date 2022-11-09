describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://aprass.studio')
    cy.get('.header__top__right > :nth-child(1) > a').click()
    cy.get('#username').type("admin1")
    cy.get('#password').type("admin123")
    cy.get('#signinbtn', {timeout: 4000}).click()
    cy.get('.header__nav__option > .dropdown > #dLabel > #profile', {timeout: 4000}).click()
    cy.get('.header__nav__option > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item', {timeout: 4000}).click()
    cy.get('.nav-item nav-link px-0 me-xl-4').click()
    cy.get(':nth-child(4) > .menu-toggle').click()
    cy.get('.open > .menu-sub > :nth-child(1) > .menu-link > div').click()
  })
})