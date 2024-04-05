describe('  AddCart and delete product Cart ', () => {
  it('Tc 004: FE |AddCart ', () => {
      cy.visit ('http://www.testingyes.com/onlineshop/')
      cy.get('a > .hidden-sm-down').click();
      cy.get('.col-md-6 > .form-control').type('kalisto@perea.com');
      cy.get('.input-group > .form-control').type('12345');
      cy.get('#submit-login').click();

      cy.get('[href="http://www.testingyes.com/onlineshop/3-clothes"]').click();
      cy.get('[data-id-product="1"] > .thumbnail-container > .thumbnail > img').click();
      cy.get(':nth-child(2) > label > .input-color').click();
      cy.get('.add > .btn').click();
      cy.get('.cart-content-btn > .btn-primary').click();


      
      


  
  });
  it('Tc 005: FE |delete product Cart ', () => {
    cy.visit ('http://www.testingyes.com/onlineshop/')
    cy.get('a > .hidden-sm-down').click();
    cy.get('.col-md-6 > .form-control').type('kalisto@perea.com');
    cy.get('.input-group > .form-control').type('12345');
    cy.get('#submit-login').click();

    cy.get('[href="http://www.testingyes.com/onlineshop/3-clothes"]').click();
    cy.get('[data-id-product="1"] > .thumbnail-container > .thumbnail > img').click();
    cy.get(':nth-child(2) > label > .input-color').click();
    cy.get('.add > .btn').click();
    cy.get('.cart-content-btn > .btn-primary').click();
    cy.get('.remove-from-cart > .material-icons').click();
    cy.get('.header > a > .hidden-sm-down').click();


    
    



});


});