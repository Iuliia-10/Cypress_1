/// <reference types="cypress" />

describe('Search', () => {

    beforeEach(() => {
        cy.visit('/');
    })    
  
    it('contains', () => {
       cy.contains('h1' , 'Do more!');
    });

    it('find', () => {
        cy.get('.header_left').find('a'); //аналог
        cy.get('.header_left a'); //аналог
     });

    it('find', () => {
        cy.get('.header_left').children('a'); //аналог
        cy.get('.header_left>a'); //аналог
    });

    it('parent', () => {
        cy.contains('.header-link' , 'Home').parent(); 
    });

    it('title', () => {
        cy.title().should('equal' , 'Hillel Qauto'); 
    });

    it('URL', () => {
        cy.url().should('equal' , 'https://qauto.forstudy.space/'); 
    });

    it('filter', () => {
        cy.get('nav').children(); 
    });

    it('filter', () => {
        cy.get('nav').children().filter('button'); 
    });

    //фільтрація за індексом
    it('ed', () => {
        cy.get('.socials_icon').eq(0); 
    });


    //фокус на полі імпуту
    it('each', () => {
        cy.contains('Sign up').click();
        cy.get('.modal-body input').each((input) => {
            cy.wrap(input).focus();
        }) 
    });

    //аліас
    it('aliases', () => {
        cy.get('.header_signin').as('signInButton');
        cy.get('@signInButton').should('have.text' , 'Sign In');
        cy.get('@signInButton').should('have.class' , 'btn btn-outline-white header_signin');
        cy.get('@signInButton').click();
    });

    //через змінну
    it.only('without aliases', () => {
        const signInButtonSelector = '.header_signin';
        cy.get(signInButtonSelector).should('have.text' , 'Sign In');
        cy.get(signInButtonSelector).should('have.class' , 'btn btn-outline-white header_signin');
        cy.get(signInButtonSelector).click();
    });
    
  })
  