import 'cypress-xpath';
import faker from 'faker';

describe('SignUp Feature', () => {
  it('Successful Signup', () => {

    //objek data menggunakan Faker
    const account = {
      FullName : faker.name.findName(),
      Email : faker.internet.email(),
      Password : faker.internet.password(),
    };

    cy.viewport(1263, 663);
    cy.visit('https://demo.evershop.io/account/register');

    cy.xpath("//input[contains(@name, 'full_name')]").type(account.FullName);
    cy.xpath("//input[contains(@name, 'email')]").type(account.Email);
    cy.xpath ("//input[contains(@type,'password')]").type(account.Password);
    cy.xpath ("//button[@type='button'][contains(.,'SIGN UP')]").click();
    cy.wait (2000);

    cy.url().should('eq', 'https://demo.evershop.io/');
    
    //menyimpan dalam fixtures
    cy.writeFile('cypress/fixtures/account.json', JSON.stringify(account));
  });

  it('Signup with existing email', () => {
    const account2 = {
      FullName : faker.name.findName(),
      Password : faker.internet.password(),
      Email : 'berlianas@gmail.com',
    };

    cy.viewport(1263, 663);
    cy.visit('https://demo.evershop.io/account/register');

    cy.xpath ("//input[contains(@name, 'full_name')]").type(account2.FullName);
    cy.xpath ("//input[contains(@name,'email')]").type(account2.Email);
    cy.xpath ("//input[contains(@type,'password')]").type(account2.Password);
    cy.xpath ("//button[@type='button'][contains(.,'SIGN UP')]").click();
    cy.wait (2000);
    
    cy.get ('.text-critical.mb-1').should('be.visible');

    cy.writeFile('cypress/fixtures/account.json', JSON.stringify(account2));
  });

});