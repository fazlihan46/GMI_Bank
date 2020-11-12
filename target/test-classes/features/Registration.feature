@snn_number
Feature: User Registration
  Background:
    Given user is on the homepage
    And user click on the usericon
    And user select register

  @TC_01_02_03_04
  Scenario Outline: user register with valid credentials
    Given user click SSN textbox
    And user enter valid SSN number "<SSN>"
    And user click name textbox
    And user enter valid name "<name>"
    And user click lastname textbox
    And user enter valid lastname "<lastname>"
    And user click address textbox
    And user enter valid address "<address>"
    And user click mobile phone textbox
    And user enter valid mobile phone number "<mobile-phone>"
    And user click username textbox
    And user enter valid username "<username>"
    And user click email textbox
    And user enter valid email "<email>"
    And user click password textbox
    And user enter valid password "<password>"
    And user click confirmation password textbox
    And user enter confirmation password "<conf-pword>"
    And user click register button
    Then user get success message "<message>"

    Examples:
      |SSN        |name|lastname|address      |mobile-phone|username|email              |password |conf-pword| message                                                           |
      |123-23-3456|Ayse|Demir   |12 column way|221-231-1111|AyseD   |aysedemir@gmail.com|Ad192837?|Ad192837? |Registration saved! Please check your email for connfirmation alert|
      |000-12-1233|Veli|Isik    |2 Daisy St   |671-123-4556|VeliI   |veliisik@gmail.com |Vi192837?|Vi192837? |Registration saved! Please check your email for connfirmation alert|
      |456-00-9876|Ali |Kuz     |13 Row St    |765-321-9090|AliK    |alikuz@gmail.com   |Ak192837?|Ak192837? |Registration saved! Please check your email for connfirmation alert|
      |900-12-1233|Can |Yavuz   |22 Table Way |876-123-1212|CanY    |canyavuz@gmail.com |Cy192837?|Cy192837? |Registration saved! Please check your email for connfirmation alert|
