Feature: Get quote

Scenario: Get quote from IQO demo
Given I am in the homepage
When I scroll down and click on CODAS IQO button
Then Codas Iqo page is displayed
When I enter postcode M54TP
And I click on Get Quote button
Then The delivery choice page is displayed
When I select '3 Day Delivery' button
Then Your details page is displayed
And I take a screenshot of your details page