class LoginPage {
  visit() {
    // Neutralize third-party telemetry requests so Cypress sees the page load event promptly.
    cy.visit('/', {
      timeout: 120000,
      waitForLoad: false,
      onBeforeLoad(win) {
        const originalFetch = win.fetch.bind(win);
        win.fetch = (...args) => {
          const [input] = args;
          const url = typeof input === 'string' ? input : input?.url;
          if (url && url.includes('events.backtrace.io')) {
            return Promise.resolve(
              new win.Response('{}', {
                status: 200,
                headers: {
                  'Content-Type': 'application/json',
                },
              })
            );
          }
          return originalFetch(...args);
        };

        const originalSendBeacon = win.navigator.sendBeacon?.bind(win.navigator);
        if (originalSendBeacon) {
          win.navigator.sendBeacon = (url, data) => {
            if (typeof url === 'string' && url.includes('events.backtrace.io')) {
              return true;
            }
            return originalSendBeacon(url, data);
          };
        }
      },
    });
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').clear().type(username);
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').clear().type(password, { log: false });
  }

  submit() {
    cy.get('[data-test="login-button"]').click();
  }

  assertErrorMessage(message) {
    cy.get('[data-test="error"]').should('be.visible').and('contain', message);
  }
}

export default LoginPage;
