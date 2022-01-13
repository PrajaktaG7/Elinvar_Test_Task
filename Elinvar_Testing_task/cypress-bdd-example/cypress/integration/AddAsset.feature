Feature: Add Asset

Scenario: Add unique asset number
    Given I open Add Asset tab
    When  I enter the asset number OOPD9087654595
    And   click on the send button 
    Then  Asset OOPD9087654595 was added to the list should be shown

Scenario: To verify if user can add the duplicate asset number
    Given I open Add Asset tab
    When  I enter the asset number QTQQ1234567890
    And   click on the send button 
    Then  I should be presented with the message Asset already exist 

Scenario: Add invalid asset number
    Given I open Add Asset tab
    And   I enter the asset number abcd145678901
    And   click on the send button 
    Then  I should be presented with the message in cypress log Please match the requested format.
