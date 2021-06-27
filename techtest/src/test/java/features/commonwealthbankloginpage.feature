Feature: Selecting travel money and navigate to login page of common wealth bank
  Verify if user is able to click on travel money and navigate to login page of common wealth bank 

  Scenario Outline: search for travel money and navigate to login page
    Given navigate to covidgame <URL>
    When User should be created
    And complete some challenges
    And check the leader board   

    Examples: 
      | URL                               | 
      | "https://responsivefight.herokuapp.com/covid	"   | 
      
