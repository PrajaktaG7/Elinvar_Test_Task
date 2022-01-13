Feature: Existing asset

Scenario: Verify existing assets
    Given Existing asset
    When  I go inside the existing asset
    Then  Existing assets table should get presented

Scenario: Verify asset entries in existing assets
    Given Existing asset
    When  I go inside the existing asset
    And   I verify the assets entries
    And   I selected the 10 assets entries
    And   I selected the 20 assets entries
    And   I selected the 50 assets entries

Scenario: Verify search in existing assets
    Given Existing asset
    When  I go inside the existing asset
    And   I enter the different asset number into search MMMM
    And   The following messages should get displayed
    And  I enters the matching asset number ABCD1234567890
    Then Only 1 and unique matching record should be displayed

Scenario: Verify ascending sorting of assets
    Given Existing asset
    When  I go inside the existing asset
    And   I clicked on ascending sorting

Scenario: Verify descending sorting of assets
    Given Existing asset
    When  I go inside the existing asset
    And   I clicked on descending sorting 

 



        
   
