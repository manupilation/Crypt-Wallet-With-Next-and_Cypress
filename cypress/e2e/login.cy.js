describe('Login screen', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visit login page', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('\'entrar\' button is disabled', () => {
    cy.get('[data-testid="submit-button"]').should('be.disabled');
  });

  it('\'entrar\' button is disabled because email is in wrong format', () => {
    cy.get('[data-testid="email-input"]').type('email@email');
    cy.get('[data-testid="password-input"]').type('12345678');

    cy.get('[data-testid="submit-button"]').should('be.disabled');

  });

  it('\'entrar\' button is disabled because password is too short', () => {
    cy.get('[data-testid="email-input"]').type('email@email.com');
    cy.get('[data-testid="password-input"]').type('1234');

    cy.get('[data-testid="submit-button"]').should('be.disabled');
  });

  it('\'entrar\' button is enabled after email and password', () => {
    cy.get('[data-testid="email-input"]').type('email@email.com');
    cy.get('[data-testid="password-input"]').type('12345678');

    cy.get('[data-testid="submit-button"]').should('be.enabled');
  });

  it('\'entrar\' button send us to wallet page', () => {
    cy.get('[data-testid="email-input"]').type('email@email.com');
    cy.get('[data-testid="password-input"]').type('12345678');

    cy.get('[data-testid="submit-button"]').click();

    cy.url().should('eq', 'http://localhost:3000/wallet')
  });
})