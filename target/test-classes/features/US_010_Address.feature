  @User_story_010
  Feature: Address


    Background: Creation page
      Scenario: go to Create or edit a Customer
      Given user go to GMI home page
      And user click sig in button
      And user enter valid username
      And user enter valid password
      And user click sign in button
      And user click my operation
      And user click manage Customer
      Then user click Create a new Customer button

  @TC_01_Address
      Scenario:negative
      Given user click address textbox
      And user leave clear textbox
    Then user click save button


