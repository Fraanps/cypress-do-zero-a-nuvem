describe ('Central de Atendimento ao Cliente TAT', () => {

  beforeEach (() => {
    cy.visit ('./src/index.html');
  });

  // ALGUMAS FORMAS DE TESTAR CAIXAS DO TIPO SELEÇÃO

  it ('marcando ambos os checkboxes, depois desmarca o último', () => {
    cy.get ('input[type="checkbox"][value="email"]')
      .check ()
      .should ('be.checked');

    cy.get ('input[type="checkbox"][value="phone"]')
      .check ()
      .should ('be.checked')
      .uncheck ()
      .should ('not.be.checked');
  });

  // não é uma boa forma se houver muitos checkboxes na página
  it.only ('marcando ambos os checkboxes, depois desmarca o último - forma 2', () => {
    cy.get ('input[type="checkbox"]')
      .check ()
      .should ('be.checked')
      .last ()
      .uncheck ()
      .should ('not.be.checked');
  });


});