describe('Create account and log out', () => {
    it('Tc 001: FE | Create account ', () => {
        cy.visit ('http://www.testingyes.com/onlineshop/')
        cy.get('a > .hidden-sm-down').click();
        cy.get('.no-account > a').click();
        cy.get(':nth-child(1) > .custom-radio > input').click();
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type('jean');
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type('vega');
        cy.get(':nth-child(4) > .col-md-6 > .form-control').type('kalisto+p49@perea.com');
        cy.get('.input-group > .form-control').type('12345');
        cy.get(':nth-child(6) > .col-md-6 > .form-control').type('08/01/1991');
        cy.get(':nth-child(7) > .col-md-6 > .custom-checkbox > label > input').click();
        cy.get(':nth-child(8) > .col-md-6 > .custom-checkbox > label > input').click();
        cy.get(':nth-child(9) > .col-md-6 > .custom-checkbox > label > input').click();
        cy.get('.form-footer > .btn').click();


    
    });
   it('Tc 002: FE | Log out', () => {
       // cy.visit ('http://www.testingyes.com/onlineshop/')
       cy.visit ('http://www.testingyes.com/onlineshop/')
       cy.get('a > .hidden-sm-down').click();
       cy.get('.no-account > a').click();
       cy.get(':nth-child(1) > .custom-radio > input').click();
       cy.get(':nth-child(2) > .col-md-6 > .form-control').type('jean');
       cy.get(':nth-child(3) > .col-md-6 > .form-control').type('vega');
       cy.get(':nth-child(4) > .col-md-6 > .form-control').type('kalisto+u49@perea.com');
       cy.get('.input-group > .form-control').type('12345');
       cy.get(':nth-child(6) > .col-md-6 > .form-control').type('08/01/1991');
       cy.get(':nth-child(7) > .col-md-6 > .custom-checkbox > label > input').click();
       cy.get(':nth-child(8) > .col-md-6 > .custom-checkbox > label > input').click();
       cy.get(':nth-child(9) > .col-md-6 > .custom-checkbox > label > input').click();
       cy.get('.form-footer > .btn').click();
       //get sign out
       cy.get('.logout').click();
      
    });
});