describe ('Central de Atendimento ao Cliente TAT', () => {

  beforeEach (() => {
    cy.visit ('./src/index.html');
  });

  // ALGUMAS FORMAS DE TESTAR INPUT TYPE RADIO

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get ('input[type="radio"][value="feedback"]')
      .check ()
      .should ('be.checked');
  });

  it('marca o tipo de atendimento "Elogio"', () => {
    cy.get ('input[type="radio"][value="elogio"]')
      .check ()
      .should ('be.checked');
  });

  it('marca o tipo de atendimento "Ajuda"', () => {
    cy.get ('input[type="radio"][value="elogio"]')
      .check ()
      .should ('be.checked');
  });


  it('marca cada tipo de atendimento', () => {
    cy.get ('input[type="radio"]')
      .check ('ajuda')
      .should ('be.checked');

    cy.get ('input[type="radio"]')
      .check ('elogio')
      .should ('be.checked');

    cy.get ('input[type="radio"]')
      .check ('feedback')
      .should ('be.checked');

  });

  //forma de testar com loop para evitar repetição de código
  // útil para testar múltiplos valores sem duplicação de código
  it('marca cada tipo de atendimento com loop', () => {
    const tiposAtendimento = ['feedback', 'ajuda', 'elogio']; // array com os tipos de feedback

    tiposAtendimento.forEach( tipo => {
      cy.get(`input[type="radio"][value="${tipo}"]`) // fazendo o get e pegando os valores do array
        .check()
        .should ('be.checked');
    });
  });

  // forma de testar com .each (útil quando tem muitos valores de radio e deseja testar em um único teste
  it("marca cada tipo de atendimento", () => {
    cy.get ('input[type="radio"]')
      .each($radioButton => {
        cy.wrap($radioButton)
          .check()
          .should ('be.checked');
      });
  });


})