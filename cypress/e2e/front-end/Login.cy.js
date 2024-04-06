describe('log in', () => {
    it('Tc 003: FE | Log in ', () => {
        cy.visit ('http://www.testingyes.com/onlineshop/')
        cy.get('a > .hidden-sm-down').click();
        cy.get('.col-md-6 > .form-control').type('kalisto+p49@perea.com');
        cy.get('.input-group > .form-control').type('12345');
        cy.get('#submit-login').click();

    });
  
});