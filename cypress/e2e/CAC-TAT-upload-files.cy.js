describe ('Central de Atendimento ao Cliente TAT', () => {

  beforeEach (() => {
    cy.visit ('./src/index.html');
  });

  // trabalhando com arquivos
  it ('seleciona um arquivo da pasta fixtures', () => {
    cy.get ('#file-upload')
      .selectFile ("cypress/fixtures/example.json")
      .should (input => { // outra forma de validação
        expect (input[0].files[0].name).to.equal ('example.json');
      });

    // .should ('have.value', 'C:\\fakepath\\example.json');
    // .invoke('val')
    // .should('include', 'example.json')

  });

  it ('seleciona um arquivo simulando drag-and-drop', () => {
    cy.get ('#file-upload')
      .selectFile ("cypress/fixtures/example.json", {action: 'drag-drop'})
      .should (input => { // outra forma de validação
        expect (input[0].files[0].name).to.equal ('example.json');
      });
  });

  it ('seleciona um arquivo utilizando uma fixture para a qual foi dado um alias', () => {
    cy.fixture ("example.json").as ('sampleFile');
    cy.get ('#file-upload')
      .selectFile ('@sampleFile')
      .should (input => { // outra forma de validação
        expect (input[0].files[0].name).to.equal ('example.json');
      });
  });

});