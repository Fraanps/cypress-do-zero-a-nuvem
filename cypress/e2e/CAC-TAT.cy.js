describe ('Central de Atendimento ao Cliente TAT', () => {
  beforeEach (() => {
    cy.visit ('./src/index.html');
  })

  it ('verifica o titulo da aplicação', () => {
    cy.title ().should ('be.equal', 'Central de Atendimento ao Cliente TAT');
  });

  it ('Preenche os campos obrigatórios e envia formulário', () => {
    const longText = Cypress._.repeat ('abcdefghijklmnopqrstuvwxyz', 10) // gerando um texto

    cy.get ("#firstName").type ("Francilene");
    cy.get ("#lastName").type ("Silva");
    cy.get ("#email").type ("fran@gmail.com");
    cy.get ("#open-text-area").type (longText, {delay: 0})
    cy.contains ('button', 'Enviar').click ()

    cy.get (".success").should ('be.visible')
  });

  it ('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get ("#firstName").type ("Francilene");
    cy.get ("#lastName").type ("Silva");
    cy.get ("#email").type ("fran.gmail.com");
    cy.get ("#open-text-area").type ("Nada a declarar!")
    cy.contains ('button', 'Enviar').click ()

    cy.get (".error").should ('be.visible');
    cy.get (".error").contains ('Valide os campos obrigatórios');
  });

  it ('Preenche campo telefone com valor não numérico e continua vazio', () => {
    cy.get ("#phone")
      .type ("fffff")
      .should ('have.value', ''); // verificando se o campo telefone está vazio
  });

  it.only ('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get ("#firstName").type ("Francilene");
    cy.get ("#lastName").type ("Silva");
    cy.get ("#email").type ("fran.gmail.com");
    cy.get ('input[type="checkbox"][value="phone"]').check()
    cy.get ("#open-text-area").type ("Nada a declarar!")
    cy.contains ('button', 'Enviar').click ()

    cy.get (".error").should ('be.visible');
    cy.get (".error").contains ('Valide os campos obrigatórios');
  });

  it ('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get ("#firstName")
      .type ("Francilene")
      .should ('have.value', 'Francilene')
      .clear ()
      .should ('have.value', '');


    cy.get ("#lastName")
      .type ("Silva")
      .should ('have.value', 'Silva')
      .clear ()
      .should ('have.value', '');

    cy.get ("#email")
      .type ("fran@gmail.com")
      .should ('have.value', 'fran@gmail.com')
      .clear ()
      .should ('have.value', '');


    cy.get ("#phone")
      .type ("01316690")
      .should ('have.value', '01316690')
      .clear ()
      .should ('have.value', '');
  });

  it ('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains ('button', 'Enviar').click ()

    cy.get (".error").should ('be.visible');
    cy.get (".error").contains ('Valide os campos obrigatórios');
  });

  it ('Envia o formulario com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit ();
    cy.get ('.success').should ('be.visible');
  });

  it ('seleciona um produto (YouTube) por seu texto ', () => {
    cy.get ('#product')
      .select ('YouTube')
      .should ('have.value', 'youtube');
  });

  it ('seleciona um produto (Mentoria) por seu valor (value) ', () => {
    cy.get ('#product')
      .select ('mentoria')
      .should ('have.value', 'mentoria');
  });

  it('seleciona um produto (Blog) por seu indice ', () => {
    cy.get ('#product')
      .select (1)
      .should ('have.value', 'blog');
  });

});