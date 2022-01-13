-All the task you will find in the Elinvar task folder
-Performed the manual testing on the given application
-Defect report excel  sheet is- Elinvar task_Defect sheet
-All the automated task Tests use cypress + cucumber approach you will find in the folder- cypress-bdd-example and which contains Folder cypress and other JSON files
-To execute the task you need to add node_modules folder.
-cypress integration contains 
  1: folders: AddAsset and ExistingAsset
              AddAsset includes AddingAsset.js file
	      ExistingAsset includes Existing-assets.js file
  
  2: AddAsset FEATURE file and ExistingAsset FEATURE file.

-To run the Add asset functionality or js file then Everytime you need to 
    1: Go to the AddAsset.feature file
    2: just replace the asset number from the steps When and Then(give unique) for the scenario Add unique asset number

-Above steps will verify to add unique asset number functionality and other than this changes you dont need to change this number from js file.Its dynamic and will fetch automatically.

-To run the other scenarios like- 
    To verify if user can add the duplicate asset number
    Add invalid asset number
-You can replace the given number with any duplicated number and any invalid number for invalid scenario. But its optional.
-It is fine even if you dont change the numbers for above 2 scenarios and keeps the data same. It will execute successfully.








