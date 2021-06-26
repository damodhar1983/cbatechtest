Feature: Selecting travel money and navigate to login page of common wealth bank
  Verify if user is able to click on travel money and navigate to login page of common wealth bank 

  Scenario Outline: search for travel money and navigate to login page
    Given navigate to commonwealth bank <URL>
    When Search for travel money overseas
    And verify the subtopics exists as expected
    And click on logon button
    Then verify id and password fields are displayed correctly

    Examples: 
      | URL                               | 
      | "https://www.commbank.com.au/	"   | 
      
