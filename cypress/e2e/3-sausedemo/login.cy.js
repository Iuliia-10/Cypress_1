/// <reference types="cypress" />

describe('Login form tests', () => {
    beforeEach(() => {
      cy.visit('/');
    })
  
    it('Success login with credentials', () => {
       cy.get('[data-test="username"]').type('standard_user');
       cy.get('[data-test="password"]').type('secret_sauce');
       cy.get('[data-test="login-button"]').click();
       cy.get('[data-test="title"]').should('have.text' ,'Products'); //аналог
       cy.contains('Products').should('be.visible'); //аналог
       cy.url().should('equal' , 'https://www.saucedemo.com/inventory.html') //перевірка URL
    });

    it.only('Login with incorrect credentials', () => {
        cy.get('[data-test="username"]').type('wrong_name');
        cy.get('[data-test="password"]').type('wrong_password');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text' ,'Epic sadface: Username and password do not match any user in this service'); 
       
    });

    it('Login by locked user', () => {
        
    });

    it('Login without userName', () => {
        
    });

    it('Login without password', () => {
        
    });
    
  })
  