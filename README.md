

#############################################

I was very sick in this week.
I have done the assignment somewhat but its probably not complete or correct :(
I am getting 200 response for most of the requests (should have tested for 400 or negative requests)

#############################################


## Cypress SauceDemo Automation

This project contains end-to-end UI automation for [SauceDemo](https://www.saucedemo.com) using the Cypress test framework. It demonstrates Page Object Model (POM) structure, reusable custom commands, and coverage for critical flows such as authentication and product navigation.

### Project Structure

- `cypress.config.js` – Cypress configuration with the SauceDemo base URL.
- `cypress/fixtures/users.json` – Test data for user credentials.
- `cypress/pages/` – Page Object classes encapsulating page-specific actions.
- `cypress/support/commands.js` – Custom Cypress commands for reusable steps.
- `cypress/e2e/` – Automated end-to-end tests.
- `package.json` – Project metadata and npm scripts.

### Available Scripts

- `npm run cypress:open` – Start the Cypress GUI runner.
- `npm run cypress:run` – Execute the Cypress test suite in headless mode.
- `npm test` – Alias for `npm run cypress:run`.

### Getting Started

1. Install dependencies:
	```powershell
	npm install
	```
2. Open the interactive Cypress runner:
	```powershell
	npm run cypress:open
	```
3. Or execute the suite headlessly:
	```powershell
	npm run cypress:run
	```

### Test Coverage

- **Login failure** – Validates the locked-out user error message.
- **Login success** – Confirms dashboard visibility after authenticating with valid credentials.
- **Product catalog** – Navigates to product details, validates content, and verifies cart interactions.

### Notes

- Custom commands (`cy.login`, `cy.addProductToCart`) centralize reusable steps and reference the page objects.
- Page objects (`LoginPage`, `ProductsPage`, `ProductDetailsPage`, `CartPage`) isolate selectors and user interactions to keep tests concise.
