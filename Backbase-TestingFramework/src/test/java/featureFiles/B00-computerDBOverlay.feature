Feature: Validate elements are displayed in computer database layout

 In order to perform actions with the page elements
 we need to verify if all those elements are displayed.

  @BACKBASE-00
  Scenario: Validate element exist in computer database layout
    Given user open computers page
    Then I validate masterhead is displayed with title text
    Then I validate masterhead title is clickable
    Then I validate subtitle is displayed and show available resources
    Then I validate search box exist in page
    Then I validate filter by name button is displayed
    Then I validate add new computer button is displayed
    Then I validate table is displayed
    Then I validate pagination buttons exist