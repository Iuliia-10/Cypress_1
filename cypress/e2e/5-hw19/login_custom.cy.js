
/// <reference types="cypress" />

describe('login', () => {
    const selectors = {
        emailField: '#signinEmail',
        passwordField: '#signinPassword',
        loginButton: '.modal-content .btn-primary',    
    }
    
    it.only('custom commands Login', () => {
        cy.visit('/');
        cy.login('golynska.iuliia+1@gmail.com', '123456Aa');
    });
    
    
})  

