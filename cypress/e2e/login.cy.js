import 'cypress-xpath';

describe('Login Feature', () => {

    it('Successful login & Login with incorrect email and password', () => {
        cy.viewport (1263, 663)
        cy.visit ('https://demo.evershop.io/account/login')

        // Fixture digunakan untuk menyimpan data yang digunakan dalam pengujian, sehingga memudahkan pengujian yang lebih terstruktur dan memisahkan data dari kode pengujian.
        cy.fixture ('identity').then((datalogin) => {

            datalogin.forEach((userdata) => {

                if (userdata.LoginCase == "PASS") {

                    cy.xpath ("//input[contains(@type,'text')]").type(userdata.Email)
                    cy.xpath ("//input[contains(@type,'password')]").type(userdata.Password)
                    cy.xpath ("//button[@type='submit'][contains(.,'SIGN IN')]").click()
                    cy.wait(2000)
                    cy.url().should('eq', 'https://demo.evershop.io/')
                    cy.xpath ("//a[@href='/account']").click()
                    cy.wait (1000)
                    cy.xpath ("//a[@class='text-interactive'][contains(.,'Logout')]").click()
                    cy.wait (1000)
                    cy.xpath ("//a[@href='/account/login']").click()

                }else if (userdata.LoginCase == "FAIL"){

                    cy.xpath ("//input[contains(@type,'text')]").type(userdata.Email)
                    cy.xpath ("//input[contains(@type,'password')]").type(userdata.Password)
                    cy.xpath ("//button[@type='submit'][contains(.,'SIGN IN')]").click()
                    cy.wait(2000)
                    cy.get('.text-critical.mb-1').should('be.visible')
                }
                
            });
        })
    });
    
});