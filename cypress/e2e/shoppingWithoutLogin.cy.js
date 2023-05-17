import 'cypress-xpath';

describe('Shopping Feature Without Login', () => {
    
    it('Customer chooses a product from a list', () => {
        cy.viewport (1263, 663)
        cy.visit ('https://demo.evershop.io/category/women')
        
        //list produk
        cy.xpath ("//div[@class='grid grid-cols-2 md:grid-cols-3 gap-2']").should('be.visible');
        
        cy.xpath ("//img[@alt='Alphaedge 4d reflective shoes R']").click();

        //Detail produk
        // titles
        cy.get ('.product-single-name').should('be.visible');
        //deskripsi
        cy.get ('.product-description').should('be.visible');
        // images 
        cy.get ('.product-single-media').should('be.visible');
        // prices
        cy.get (".sale-price").should('be.visible');
    
    });

    it('Adding multiple items to the shopping cart', () => {
        
        cy.viewport (1263, 663)
        cy.visit ('https://demo.evershop.io/category/women')

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
        
        //view total price
        cy.get ('.text-right').should('be.visible');
        cy.get ('.items-table.listing').should('be.visible');
    
    });

    it('Updating the quantity of items in the shopping cart', () => {
        cy.viewport (1263, 663)
        cy.visit ('https://demo.evershop.io/category/women')
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

        cy.xpath ("(//a[contains(@class,'name font-semibold hover:underline')])[1]").click();
        cy.xpath ("//input[@placeholder='Qty']").clear().type(2);
        cy.xpath ("//a[normalize-space()='L']").click();
        cy.wait (1000);
        cy.xpath ("//a[normalize-space()='Blue']").click();
        cy.wait (1000);
        cy.xpath ("//button[@type='button'][contains(.,'ADD TO CART')]").click();
        cy.wait (2000);

        //view cart
        cy.xpath ("//div[@class='toast-mini-cart']").within(() => {
            cy.xpath ("//a[contains(@class,'add-cart-popup-button')]").click();
        });
        
        //view total price
        cy.get ('.text-right').should('be.visible');
    });
    
    it('Removing items from the shopping cart', () => {
        cy.viewport (1263, 663)
        cy.visit ('https://demo.evershop.io/category/women')
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

    it('Proceeding to checkout with items in the shopping cart', () => {
        
          cy.viewport (1263, 663)
          cy.visit ('https://demo.evershop.io/category/women')
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

        cy.xpath ("//a[contains(@class,'button primary')]").click();

        cy.xpath ("(//div)[16]").should('be.visible');

    });
});