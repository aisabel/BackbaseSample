Feature: Delete existing computer register

In order to delete a computer register
I want to click delete button

@BACKBASE-04
  Scenario Outline: delete computer register
  Given user is on homepage
  When I fill in filter field with "<Name>"
  And I click filter by name button
  Then I should see the "<Name>" computer link
  Then I click "<Name>" link
  Then I click delete this computer button
  Then I verify delete message is displayed

    Examples:
      | Name	            |
      | Canon EOS 1300D     |

  #Note: This feature file doesn't have a stepDefinition class enabled. Most of the step were used reusing existing methods