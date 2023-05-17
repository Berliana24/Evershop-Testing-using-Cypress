import 'cypress-xpath';

export function loginTest(){
    cy.viewport (1263, 663);
    cy.visit ('https://demo.evershop.io/account/login');
    
    cy.fixture ('identity.json').each((userdata) => {

        if (userdata.LoginCase === "PASS") {

            cy.xpath ("//input[contains(@type,'text')]").type(userdata.Email);
            cy.xpath ("//input[contains(@type,'password')]").type(userdata.Password);
            cy.xpath ("//button[@type='submit'][contains(.,'SIGN IN')]").click();
                    
            cy.url().should('eq', 'https://demo.evershop.io/');
            cy.wait (1000);
        }
    });
}
        
       