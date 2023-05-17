import 'cypress-xpath';
import faker from 'faker';
import {loginTest} from './loginvalid.cy.js';

describe('Shopping Feature With Login', () => {
    
    beforeEach(() => {
        loginTest();
    });

    it('Add multiple items to the shopping cart with a logged-in user', () => {

        cy.xpath ("//a[@class='nav-link hover:underline'][contains(.,'Women')]").click();
        
        //list produk
        cy.xpath ("//div[@class='grid grid-cols-2 md:grid-cols-3 gap-2']").should('be.visible');
        
        // add produk 1
        cy.xpath ("//img[@alt='Alphaedge 4d reflective shoes R']").click();
        cy.xpath ("//a[normalize-space()='M']").click();
        cy.wait (1000);
        cy.xpath ("//a[normalize-space()='Black']").click();
        cy.wait (1000);
        cy.xpath ("//button[contains(.,'ADD TO CART')]").click();
        cy.wait (2000);

        //continue shooping
        cy.xpath ("//a[normalize-space()='Continue Shopping']").click();
        cy.wait (2000);

        // add produk 2
        cy.xpath ("//a[@class='nav-link hover:underline'][contains(.,'Women')]").click();
        cy.xpath("//div[@class='listing-tem'][contains(.,'Edge gameday shoes$963.00')]").scrollIntoView();
        cy.get ("img[alt='Edge gameday shoes']").click();
        cy.xpath ("//a[normalize-space()='L']").click();
        cy.wait (1000);
        cy.xpath ("//a[normalize-space()='Blue']").click();
        cy.wait (1000);
        cy.xpath ("//button[contains(.,'ADD TO CART')]").click();
        cy.wait (2000);
        
        //view cart
        cy.xpath ("//div[@class='toast-mini-cart']").within(() => {
            cy.xpath ("//a[contains(@class,'add-cart-popup-button')]").click();
        });
        
        // view quantity
        cy.xpath("(//td[@class='hidden md:table-cell'])[3]").should('be.visible');

        //view unit price
        cy.xpath("//tbody//tr//td[3]").should('be.visible');

        //view total price
        cy.get ('.text-right').should('be.visible');
        cy.get ('.items-table.listing').should('be.visible');

        //update quantity
        cy.xpath ("(//a[contains(@class,'name font-semibold hover:underline')])[1]").click();
        cy.xpath ("//input[@placeholder='Qty']").clear().type(2);
        cy.xpath ("//a[normalize-space()='M']").click();
        cy.wait (1000);
        cy.xpath ("//a[normalize-space()='Black']").click();;
        cy.wait (1000);
        cy.xpath ("//button[@type='button'][contains(.,'ADD TO CART')]").click();
        cy.wait (2000);

        //view cart
        cy.xpath ("//div[@class='toast-mini-cart']").within(() => {
            cy.xpath ("//a[contains(@class,'add-cart-popup-button')]").click();
        });
        
        //view sub total price
        cy.xpath ("//tbody//tr//td[3]").should('be.visible');

        // view total item
        cy.xpath ("(//td[contains(@class,'hidden md:table-cell')])[4]").should('be.visible');

        //checkout
        const checkout = {
            FullName : faker.name.findName(),
            Telephone : faker.phone.phoneNumber(),
            Address : faker.address.streetAddress(),
            City : faker.address.city(),
            PostCode : faker.address.zipCode(),
          };
        
        cy.xpath ("//a[contains(@class,'button primary')]").click();

        cy.xpath ("//input[contains(@name,'address[full_name]')]").type(checkout.FullName);
        cy.xpath ("//input[contains(@name,'address[telephone]')]").type(checkout.Telephone);
        cy.xpath ("//input[contains(@name,'address[address_1]')]").type(checkout.Address);
        cy.xpath ("//input[contains(@name,'address[city]')]").type(checkout.City);
        cy.xpath ("//select[contains(@name,'address[country]')]").select('United States');
        cy.xpath ("//select[contains(@name,'address[province]')]").select('California');
        cy.xpath ("//input[contains(@name,'address[postcode]')]").type(checkout.PostCode);

        cy.xpath ("(//span[contains(@class,'radio-unchecked')])[1]").click({force : true});

        cy.xpath ("//button[@type='button'][contains(.,'Continue to payment')]").click();

        cy.xpath ("//div[@class='checkout-payment checkout-step']//div//div[1]//div[1]//div[1]//div[1]//div[1]//a[1]//*[name()='svg']")
        .click({ force: true });

        cy.xpath ("//button[@type='button'][contains(.,'Place Order')]").click();

        cy.xpath ("//div[@class='checkout-payment checkout-step']//div//div[1]//div[1]//div[1]//div[1]//div[1]//a[1]//*[name()='svg']")
        .click({ force: true });

        cy.writeFile('cypress/fixtures/checkout.json', JSON.stringify(checkout));

    });

    it('Removing items from the shopping cart', () => {
        cy.xpath ("//a[@class='nav-link hover:underline'][contains(.,'Women')]").click();
        
        //list produk
        cy.xpath ("//div[@class='grid grid-cols-2 md:grid-cols-3 gap-2']").should('be.visible');

        // add produk 
        cy.xpath ("//a[@class='nav-link hover:underline'][contains(.,'Women')]").click();
        cy.xpath("//div[@class='listing-tem'][contains(.,'Edge gameday shoes$963.00')]").scrollIntoView();
        cy.get ("img[alt='Edge gameday shoes']").click();
        cy.xpath ("//a[normalize-space()='L']").click();
        cy.wait (1000);
        cy.xpath ("//a[normalize-space()='Blue']").click();
        cy.wait (1000);
        cy.xpath ("//button[contains(.,'ADD TO CART')]").click();
        cy.wait (2000);
        
        //view cart
        cy.xpath ("//div[@class='toast-mini-cart']").within(() => {
            cy.xpath ("//a[contains(@class,'add-cart-popup-button')]").click();
        });
        
        cy.xpath ("(//span[contains(.,'Remove')])[1]").click();

        // view total price
        cy.get ('.text-right').should('be.visible');
    });

});