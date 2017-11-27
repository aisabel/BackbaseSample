Feature: Update existing computer register

  In order to update a computer register
  I want to populate the fields with new data info

  @BACKBASE-03
  Scenario Outline: update computer register
    Given user is on homepage
    When I fill in filter field with "<Name>"
    And I click filter by name button
    Then I should see the "<Name>" computer link
    Then I click "<Name>" link
    Then I update computer name field with "<NameUpdate>"
    And I update introduced date field with "<IntroducedDate>"
    And I update discontinued date field with "<DiscontinuedDate>"
    Then I update "<companyName>" option
    Then I click save this computer button
    Then I verify update message is displayed

    Examples:
      | Name	         |  NameUpdate               |IntroducedDate	|  DiscontinuedDate	| companyName	|
      | Nokia 3310 - 3G  |  Nokia 3310 - DonkerBlau  |1579-01-31		| 	3579-01-31		| RCA	    	|