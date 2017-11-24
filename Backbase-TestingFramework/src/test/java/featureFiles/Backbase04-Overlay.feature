Feature: Validate element exist in computer database layout

  As order to perform actions with the page elements
  we need to verify if all those elements are displayed.

  @BACKBASE-001
  Scenario: Validate element exist in computer database layout
    Given user open computers page
    Then I validate masthead is displayed with title text
    Then I validate masthead title is clickable
    Then I validate title exist and display available resources
    Then I validate search box exist
    Then I validate filter by name button exist
    Then I validate table exist
    Then I validate pagination buttons exist