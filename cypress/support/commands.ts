import { USER_LOCALSTORAGE_KEY } from '../../src/shared/const/localStorage';

Cypress.Commands.add('login', (username = 'testuser', password = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
    });
});

Cypress.Commands.add('getByTestId', (id) => cy.get(`[data-testid=${id}]`));
