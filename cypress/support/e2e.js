import './commands';

beforeEach(() => {
	cy.intercept('https://events.backtrace.io/**', {
		statusCode: 200,
		body: {},
	});
});
