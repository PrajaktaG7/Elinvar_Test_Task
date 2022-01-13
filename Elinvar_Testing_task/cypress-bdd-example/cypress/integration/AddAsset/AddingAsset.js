/// <reference types="cypress" />
import { Before, Given, When, And,Then } from "cypress-cucumber-preprocessor/steps";

let stub;

Before(()=>{
    cy.log("Execution before step");
    stub=cy.stub();
})
//Scenari-1 Add unique asset number
Given('I open Add Asset tab', () => {
    cy.visit('http://46.101.167.52:3000/#/');

    cy.get('[testid="add-asset"]').click()
})      
When("I enter the asset number {word}", (number) => {
    
    cy.get('#defaultFormAddAsset').type(number)  
})
And('click on the send button', () => {

    cy.get('[data-test="button"]').click()
  
})

Then('Asset {word} was added to the list should be shown', () => {
  
    cy.get('.modal-title').contains('Sucssess')  
})

//Scenario-2 To verify if user can add the duplicate asset number

Then('I should be presented with the message Asset already exist', () => {
    
    cy.get('[data-test="button"]').click()
    
    cy.contains('Asset name should be unique. Assert with this name already exists').should('be.visible')
})

//Scenario-3 Add invalid asset number

Then('I should be presented with the message in cypress log Please match the requested format.', () => {    
    cy.log('Please match the requested format.')
    
})
  
    



