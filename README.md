# Evershop-Testing-using-Cypress

Create Test case for Evershop Website using Cypress
    link: (https://demo.evershop.io/)

## Running Test
    npx cypress open    

## 1.	SignUp Feature


### Case 1

Feature: Signup
  As a user
  I want to create a new account
  So that I can access the app

    Scenario: Successful Signup
    Given I am on the Signup page
    When I fill in the Signup form with valid credentials
    And I click the Signup button
    Then I should be redirected to the Home page

Acceptance Criteria:
Successful Signup:
- The Signup form should include fields for a username, email, and password
- The email should be a valid email format
- The password should meet the minimum requirements (e.g. 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number)
- After clicking the Signup button, the user should be redirected to the Home page


### Case 2

Feature: Signup
  As a user
  I want to create a new account
  So that I can access the app

    Scenario: Signup with existing email
    Given I am on the Signup page
    When I fill in the Signup form with an existing email
    And I click the Signup button
    Then I should see an error message
    And I should remain on the Signup page

  Acceptance Criteria:
  Signup with existing email:
- The Signup form should include fields for a username, email, and password
- The email should already be registered in the system
- After clicking the Signup button, the user should see an error message indicating that the email is already in use
- The user should remain on the Signup page and be able to try again with a different email.



## 2.	Login Feature


### Case 1

Story: 
  As a user, 
  I want to be able to log in to my account 
  So that I can access my profile and make purchases.

    Scenario: Successful login
    Given that I am on the login page
    When I enter my correct email and password
    And I click on the login button
    Then I should be redirected to my account page

Acceptance criteria:
- The user should be able to log in to their account using a valid email and password
- The user should be redirected to their home page upon successful login
- The user should see an error message if they enter an invalid email or password


### Case 2

Story: 
  As a user, 
  I want to log into my account 
  So I can access my profile and settings.

    Scenario: Login with incorrect email and password
    Given I am on the login page
    When I enter an incorrect email address and password
    And I click the "Login" button
    Then I should see an error message that says "Incorrect email address or password"
    And I should remain on the login page

Criteria for Failure: The test case would be considered a failure if any of the following conditions are met:
- The user is able to log in with an incorrect email and password combination
- The error message is not displayed when the user enters an incorrect email and password
- The user is not redirected back to the login page after entering an incorrect email and password



## 3.	Shopping Feature Without Login


### Case 1

  User Story: 
  As a customer, 
  I want to be able to choose a product from a list of available products 
  So that I can add it to my cart and proceed with my purchase.

  Feature: Choose Product

    Scenario: Customer chooses a product from a list
    Given the customer is on the product page
    When the customer views the list of available products
    Then the customer should see a list of products with titles, descriptions, images, and prices


### Case 2

    Scenario: Adding multiple items to the shopping cart
    Given the user has selected the desired items
    When the user adds multiple items to the shopping cart
    Then the system should display the total price of the items correctly
    And the system should allow the user to view the list of items in the shopping cart


### Case 3

    Scenario: Updating the quantity of items in the shopping cart
    Given the user has added multiple items to the shopping cart
    When the user updates the quantity of an item
    Then the system should recalculate the total price of the items correctly
    And the system should display the updated total price of the items in the shopping cart


### Case 4

    Scenario: Removing items from the shopping cart
    Given the user has added multiple items to the shopping cart
    When the user removes an item from the shopping cart
    Then the system should recalculate the total price of the items correctly
    And the system should display the updated total price of the items in the shopping cart


### Case 5

    Scenario: Proceeding to checkout with items in the shopping cart
    Given the user has added multiple items to the shopping cart
    When the user selects the checkout option
    Then the user should be able to proceed to the checkout process with the items in the shopping cart


Acceptance Criteria:
- The system should allow the user to add multiple items to the shopping cart.
- The total price of the items in the shopping cart should be calculated accurately.
- The user should be able to view the list of items in the shopping cart.
- The user should be able to update the quantity of each item in the shopping cart.
- The user should be able to remove items from the shopping cart.
- The system should display the updated total price of the items in the shopping cart after any changes.



## 4.	Shopping Feature With Login


### Case 1

    Scenario: Add multiple items to the shopping cart with a logged-in user
    Given I am a logged-in user
    When I add multiple items to my shopping cart
    Then the items should be successfully added to the shopping cart
    And the total quantity of items in the cart should be updated accordingly
    And the subtotal of the items should be calculated correctly
    And the total price of the items should be calculated correctly

Acceptance Criteria:
- The user must be logged in to perform the action of adding items to the shopping cart.
- The system should allow the user to add multiple items to the shopping cart.
- The items added to the shopping cart should be reflected accurately in terms of quantity.
- The subtotal of the items should be calculated correctly based on the quantity and unit price of each item.
- The total price of the items in the shopping cart should be calculated correctly, including any applicable taxes or discounts.
- The system should display the updated quantity, subtotal, and total price of the items in the shopping cart to the user.
- The user should be able to view the added items in the shopping cart and their details.
- The user should be able to proceed to the checkout process after adding multiple items to the shopping cart.
- The system should retain the items in the shopping cart if the user navigates to different pages or logs out and logs back in.
- The system should provide an option for the user to remove items from the shopping cart if desired.

