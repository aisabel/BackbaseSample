Feature: Delete existing computer register

  As order to delete a computer register
  I want to click delete button

  @BACKBASE-005
  Scenario Outline: delete computer register
    Given user is in computer homepage
    When I fill in search field with "<NameSearch>"
    And I click filter button
    And I click "<Name>" link to delete
    Then I click delete this computer button
    Then I verify delete message is displayed

    Examples:
      |NameSearch	 | Name			      |
      | Erikson v2   | Erikson v2		  |