Feature: Basic experiments of interaction with Angular site using protractor

  Scenario: Move over link on the page
    Given I'm on Angular site
    When I click on the Blog link
    Then I move to the linked page
