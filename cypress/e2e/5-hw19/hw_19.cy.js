/// <reference types="cypress" />

describe('Sign up', () => {
    const randomEmail = `golynska.iuliia+${Date.now()}@gmail.com`; 
    
    const selectors = {
       nameField: '#signupName',
       lastNameField: '#signupLastName',
       emailField: '.modal-content #signupEmail',
       passwordField: '.modal-content #signupPassword',
       reEnterPasswordField: '.modal-content #signupRepeatPassword',
       registerButton: '.modal-content .btn-primary',      
   }

   beforeEach(() => {
       cy.visit('/');
       cy.contains('Sign up').click();    
   })    
 
   it('Title Registration', () => {
       cy.get('.modal-title').should('have.text' , 'Registration');
   });

   it('Positive case. Success sign up', () => {
    cy.get(selectors.nameField).click();
    cy.get(selectors.nameField).type('Yulia');
    cy.get(selectors.lastNameField).click();
    cy.get(selectors.lastNameField).type('Golynska');
    cy.get(selectors.emailField).click()
    cy.get(selectors.emailField).type(randomEmail);
    cy.get(selectors.passwordField).click()
    cy.get(selectors.passwordField).type('123456Aa');
    cy.get(selectors.reEnterPasswordField).click()
    cy.get(selectors.reEnterPasswordField).type('123456Aa');
    cy.get(selectors.registerButton).should('be.enabled');
    cy.get(selectors.registerButton).click()
    cy.url().should('equal' , 'https://qauto.forstudy.space/panel/garage');
    cy.get('.justify-content-between')
       .should('contain.text', 'Garage');

    });

   
   it('1-1 Empty field Name. Border color red. Register button is disabled', () => {
       cy.get(selectors.nameField).click()
       cy.get(selectors.nameField).focus();
       cy.get(selectors.nameField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(0) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Name required');
       cy.get(selectors.nameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });  

   it('1-2 Field Name contains unsupported language. Border color red', () => {
       cy.get(selectors.nameField).click();
       cy.get(selectors.nameField).type('авпвапвап');
       cy.get(selectors.nameField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(0) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Name is invalid');
       cy.get(selectors.nameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');   
   }); 

   it('1-3 Field Name contains space. Border color red', () => {
       cy.get(selectors.nameField).click();
       cy.get(selectors.nameField).type('Anna Li');
       cy.get(selectors.nameField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(0) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Name is invalid');
       cy.get(selectors.nameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');   
   });

   it('1-4 Field Name contains 1 symbol. Border color red', () => {
       cy.get(selectors.nameField).click();
       cy.get(selectors.nameField).type('A');
       cy.get(selectors.nameField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(0) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Name has to be from 2 to 20 characters long');
       cy.get(selectors.nameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');   
   });

   it('1-5 Field Name contains more than 20 symbols. Border color red', () => {
       cy.get(selectors.nameField).click();
       cy.get(selectors.nameField).type('Qwertyuiopasdfghjklzx');
       cy.get(selectors.nameField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(0) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Name has to be from 2 to 20 characters long');
       cy.get(selectors.nameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');   
   });

   ////////////////////

   it('2-1 Empty field Last Name. Border color red', () => {
       cy.get(selectors.lastNameField).click()
       cy.get(selectors.lastNameField).focus();
       cy.get(selectors.lastNameField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(1) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Last name required');
       cy.get(selectors.lastNameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   }); 

   it('2-2 Field Last name contains unsupported language', () => {
       cy.get(selectors.lastNameField).click();
       cy.get(selectors.lastNameField).type('авпвапвап');
       cy.get(selectors.lastNameField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(1) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Last name is invalid');
       cy.get(selectors.lastNameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');   
   }); 

   it('2-3 Field Last name contains space. Border color red', () => {
       cy.get(selectors.lastNameField).click();
       cy.get(selectors.lastNameField).type('Norman De');
       cy.get(selectors.lastNameField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(1) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Last name is invalid');
       cy.get(selectors.lastNameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');   
   });

   it('2-4 Field Last name contains 1 symbol. Border color red', () => {
       cy.get(selectors.lastNameField).click();
       cy.get(selectors.lastNameField).type('A');
       cy.get(selectors.lastNameField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(1) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Last name has to be from 2 to 20 characters long');
       cy.get(selectors.lastNameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');   
   });

   it('2-5 Field Last name contains more than 20 symbols. Border color red', () => {
       cy.get(selectors.lastNameField).click();
       cy.get(selectors.lastNameField).type('Qwertyuiopasdfghjklzx');
       cy.get(selectors.lastNameField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(1) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Last name has to be from 2 to 20 characters long');
       cy.get(selectors.lastNameField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');   
   });

   ////////////////////

   it('3-1 Empty field Email. Border color red', () => {
       cy.get(selectors.emailField).click()
       cy.get(selectors.emailField).focus();
       cy.get(selectors.emailField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(2) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Email required');
       cy.get(selectors.emailField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });
   
   it('3-2 Incorrect format of Email (without @). Border color red', () => {
       cy.get(selectors.emailField).click()
       cy.get(selectors.emailField).type('golynska.iuliiagmail.com');
       cy.get(selectors.emailField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(2) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Email is incorrect')
       cy.get(selectors.emailField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });

   it('3-3 Incorrect format of Email (without .). Border color red', () => {
       cy.get(selectors.emailField).click()
       cy.get(selectors.emailField).type('golynska.iuliia@gmailcom');
       cy.get(selectors.emailField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(2) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Email is incorrect')
       cy.get(selectors.emailField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });

   it('3-4 Incorrect format of Email (location of special symbols). Border color red', () => {
       cy.get(selectors.emailField).click()
       cy.get(selectors.emailField).type('golynska.iuliia@gmail.com-');
       cy.get(selectors.emailField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(2) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Email is incorrect')
       cy.get(selectors.emailField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });

   ////////////////////

   it('4-1 Empty field Password. Border color red', () => {
       cy.get(selectors.passwordField).click()
       cy.get(selectors.passwordField).focus();
       cy.get(selectors.passwordField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(3) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Password required')
       cy.get(selectors.passwordField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });

   it('4-2 Wrong data of Password (7 symbols). Border color red', () => {
       cy.get(selectors.passwordField).click()
       cy.get(selectors.passwordField).type('12345Aa');
       cy.get(selectors.passwordField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(3) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
       cy.get(selectors.passwordField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });

   it('4-3 Wrong data of Password (16 symbols). Border color red', () => {
       cy.get(selectors.passwordField).click()
       cy.get(selectors.passwordField).type('1234567890AaBbCc');
       cy.get(selectors.passwordField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(3) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
       cy.get(selectors.passwordField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });

   it('4-4 Wrong data of Password (without integer). Border color red', () => {
       cy.get(selectors.passwordField).click()
       cy.get(selectors.passwordField).type('AaBbCcDdEeFfGgH');
       cy.get(selectors.passwordField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(3) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
       cy.get(selectors.passwordField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });

   it('4-5 Wrong data of Password (without capital letter). Border color red', () => {
       cy.get(selectors.passwordField).click()
       cy.get(selectors.passwordField).type('1234567a');
       cy.get(selectors.passwordField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(3) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
       cy.get(selectors.passwordField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });

   it('4-6 Wrong data of Password (without small letter). Border color red', () => {
       cy.get(selectors.passwordField).click()
       cy.get(selectors.passwordField).type('1234567A');
       cy.get(selectors.passwordField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(3) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
       cy.get(selectors.passwordField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });

   ////////////////////

   it('5-1 Empty field Re-enter password. Border color red', () => {
       cy.get(selectors.reEnterPasswordField).click()
       cy.get(selectors.reEnterPasswordField).focus();
       cy.get(selectors.reEnterPasswordField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(4) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Re-enter password required')
       cy.get(selectors.reEnterPasswordField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });

   it('5-2 Passwords do not match. Border color red', () => {
       cy.get(selectors.passwordField).click()
       cy.get(selectors.passwordField).type('1234567Aa');
       cy.get(selectors.passwordField).blur();
       cy.get(selectors.reEnterPasswordField).click()
       cy.get(selectors.reEnterPasswordField).type('11234567Aa');
       cy.get(selectors.reEnterPasswordField).blur();
       cy.get('div.modal-content')
       cy.get('div.form-group')
       .eq(4) 
       .find('div.invalid-feedback')
       .should('contain.text', 'Passwords do not match')
       cy.get(selectors.reEnterPasswordField).should('have.css', 'border-color', 'rgb(220, 53, 69)');
       cy.get(selectors.registerButton).should('be.disabled');
   });   
    
});