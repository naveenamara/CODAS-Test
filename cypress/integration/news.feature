Feature: News Tab

    Verify that the article is displayed

    Scenario: Verify the news article for 30/01/2022
    Given I am in the homepage
    When I click on News tab
    Then News page is displayed
    And I can see March news article
    When I click on Read More button of March news article
    Then The article is displayed
    And I take a screenshot of the article