/// <reference types="cypress" />

describe('Header', () => {

    beforeEach(() => {
        cy.visit('/');
    })    
  
    it('title', () => {
        cy.title().should('equal' , 'Hillel Qauto'); 
    });

    it('URL', () => {
        cy.url().should('equal' , 'https://qauto.forstudy.space/'); 
    });

    //Home, About, Contacts
    it('Header left', () => {
        cy.get('nav').children();
        cy.get('nav').find('a').should('have.text' , 'Home');
        cy.get('nav').find('button').eq(0).should('have.text' , 'About');
        cy.get('nav').find('button').eq(0).click();
        cy.get('nav').find('button').eq(1).should('have.text' , 'Contacts');
        cy.get('nav').find('button').eq(1).click();  
    });

    //аліас Sign In
    it('Header right', () => {
        cy.get('.header_signin').as('signInButton');
        cy.get('@signInButton').should('have.text' , 'Sign In');
        cy.get('@signInButton').should('have.class' , 'btn btn-outline-white header_signin');
        cy.get('@signInButton').click();
    });

    //елемент попередній від обраного на одному рівні в стуктурі Guest log in
    it('Header right prev', () => {
        cy.contains('.header_signin' , 'Sign In').prev().should('have.text' , 'Guest log in');
        cy.contains('.header_signin' , 'Sign In').prev().click();
    });
})    

describe('Footer', () => {

    beforeEach(() => {
        cy.visit('/');
    })    
  
    //посилання на соціальні мережі - зліва
    it('Footer left', () => {
        cy.get('.socials_link').should('exist');
        cy.get('.socials_link').filter(':visible');
        cy.get('.socials_link').eq(0).click();
        cy.get('.socials_link').eq(1).click();
        cy.get('.socials_link').eq(2).click();
        cy.get('.socials_link').eq(3).click();
        cy.get('.socials_link').eq(4).click();
    });

    //посилання спава
    it('Footer right', () => {
        cy.get('.contacts_link').should('exist');
        cy.get('.contacts_link').filter(':visible');
        cy.get('.contacts_link').eq(0).click();
        cy.get('.contacts_link').eq(1).click();
    });

    
    
})     


    

    

    

  