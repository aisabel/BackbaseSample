Feature: Create new computer register

 In order to create a new computer register
 I want to fill in all  fields

  @BACKBASE-01
  Scenario Outline: Create new computer register
    Given user is on homepage
    When I click Add a new computer button
    And I fill in computer name field with "<Name>"
    And I fill in introduced date field with "<IntroducedDate>"
    And I fill in discontinued date field with "<DiscontinuedDate>"
    Then I select "<companyName>" option
    Then I click create this computer button
    Then I verify success message is displayed
    Examples:
      | Name			      |  IntroducedDate		|  DiscontinuedDate	| companyName	|
      | Nokia v1			  |  1999-08-03			| 	2099-08-03		| Nokia	    	|
      | 1234567890123	      |  1999-08-03			| 	2099-08-03		| Canon	    	|
