Feature: Is there a user logged in?

    Is someone viewing gifs?

    Scenario: Someboody is viewing gifs
    Given someone is logged in
    When I ask if someone logged in
    Then I should be told "Yes"