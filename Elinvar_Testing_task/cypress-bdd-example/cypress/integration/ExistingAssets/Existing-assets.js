/// <reference types="cypress" />
import { Before, Given, When, And,Then } from "cypress-cucumber-preprocessor/steps";

//Scenario-1: Verify existing assets

Given('Existing asset', () => {
    cy.visit('http://46.101.167.52:3000/#/');
    
})
When('I go inside the existing asset', () => {
   
    cy.get('[href="#/assets"]').click()
})
Then('Existing assets table should get presented', () => {
   
    cy.get('[data-test="datatable-table"]').should('be.visible')
})

//Scenario-2: Verify asset entries in existing assets

And('I verify the assets entries', () => {   
    cy.wait(5000)
    cy.get('.custom-select').should('exist')
    cy.get('[data-test="datatable-entries"]').should('be.visible')

})
And('I selected the 10 assets entries', () => {    
    cy.wait(5000)   
    cy.get('.custom-select').select('10')
    //cy.get('[data-test="datatable-entries"]').should('be.visible')
    var count = cy.get('[data-test="datatable-table"]').find('td').should('have.length', 10).should('be.visible')
    cy.log(count)  
})

And('I selected the 20 assets entries', () => {    
    cy.wait(5000)   
    cy.get('.custom-select').select('20')
    var count = cy.get('[data-test="datatable-table"]').find('td').should('have.length', 20).should('be.visible')
    cy.wait(500)
    cy.log(count)

})
And('I selected the 50 assets entries', () => {    
    cy.wait(5000)   
    cy.get('.custom-select').select('50')
    var count = cy.get('[data-test="datatable-table"]').find('td').should('have.length', 50).should('be.visible')
    cy.wait(500)
    cy.log(count)
})

//Scenario: Verify search in existing assets
And('I enter the different asset number into search {word}', (number) => {    
    cy.get('[data-test="datatable-input"] > .form-control').type(number)
})
And('The following messages should get displayed', () => {   
    cy.contains('No matching records found').should('be.visible')
    cy.contains('Showing 0 entries').should('be.visible')
    cy.get('[data-test="datatable-input"] > .form-control').clear()
})
And('I enters the matching asset number {word}', (number) => {   
    cy.get('[data-test="datatable-input"] > .form-control').type(number)
})
Then('Only 1 and unique matching record should be displayed',()=>{
    cy.get('[data-test="datatable-table"]').find('td').should('have.length', 1)
    cy.get('[data-test="datatable-input"] > .form-control').clear()
})

//Scenario: Verify ascending sorting of assets
And('I clicked on ascending sorting', () => {  
    cy.get('.sorting').click() 
    cy.get('.sorting_asc').should('be.visible')
})

//Scenario: Verify descending sorting of assets
And('I clicked on descending sorting', () => {  
    cy.get('.sorting').click() 
    cy.get('.sorting_asc').should('be.visible')
    cy.get('.sorting_asc').click()
})
And('I clicked on descending sorting', () => {  
cy.get('.sorting_desc').click()
cy.get('.sorting_desc').should('be.visible')
})

      