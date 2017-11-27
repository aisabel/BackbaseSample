Feature: Read existing computer register

  In order to find an existing register
  I want to find it in the database

  @BACKBASE-02
  Scenario Outline: read computer register
    Given user is on homepage
    When I fill in filter field with "<Name>"
    And I click filter by name button
    Then I should see the "<Name>" computer link
    And I should see the introduced date "<IntroducedDate>"
    And I should see the discontinued date "<DiscontinuedDate>"
    And I should see the company "<companyName>"

    Examples:
      | Name			        |  IntroducedDate		|  DiscontinuedDate	| companyName	|
      | Nokia 3310 - 3G         |  1999-08-03			| 	2099-08-03		| Nokia	    	|