$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Registration1.feature");
formatter.feature({
  "name": "User Registration",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@snn_number"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_01_02_03_04"
    }
  ]
});
formatter.step({
  "name": "user click SSN textbox",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter valid SSN number \"\u003cSSN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click name textbox",
  "keyword": "And "
});
formatter.step({
  "name": "user enter valid name \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click lastname textbox",
  "keyword": "And "
});
formatter.step({
  "name": "user enter valid lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "And "
});
formatter.step({
  "name": "user enter valid address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click mobile phone textbox",
  "keyword": "And "
});
formatter.step({
  "name": "user enter valid mobile phone number \"\u003cmobile-phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click username textbox",
  "keyword": "And "
});
formatter.step({
  "name": "user enter valid username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click email textbox",
  "keyword": "And "
});
formatter.step({
  "name": "user enter valid email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click password textbox",
  "keyword": "And "
});
formatter.step({
  "name": "user enter valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click confirmation password textbox",
  "keyword": "And "
});
formatter.step({
  "name": "user enter confirmation password \"\u003cconf-pword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click register button",
  "keyword": "And "
});
formatter.step({
  "name": "user get success message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "name",
        "lastname",
        "address",
        "mobile-phone",
        "username",
        "email",
        "password",
        "conf-pword",
        "message"
      ]
    },
    {
      "cells": [
        "123-23-3456",
        "Ayse",
        "Demir",
        "12 column way",
        "221-231-1111",
        "AyseD",
        "aysedemir@gmail.com",
        "Ad192837?",
        "Ad192837?",
        "Registration saved! Please check your email for connfirmation alert"
      ]
    },
    {
      "cells": [
        "000-12-1233",
        "Veli",
        "Isik",
        "2 Daisy St",
        "671-123-4556",
        "VeliI",
        "veliisik@gmail.com",
        "Vi192837?",
        "Vi192837?",
        "Registration saved! Please check your email for connfirmation alert"
      ]
    },
    {
      "cells": [
        "456-00-9876",
        "Ali",
        "Kuz",
        "13 Row St",
        "765-321-9090",
        "AliK",
        "alikuz@gmail.com",
        "Ak192837?",
        "Ak192837?",
        "Registration saved! Please check your email for connfirmation alert"
      ]
    },
    {
      "cells": [
        "900-12-1233",
        "Can",
        "Yavuz",
        "22 Table Way",
        "876-123-1212",
        "CanY",
        "canyavuz@gmail.com",
        "Cy192837?",
        "Cy192837?",
        "Registration saved! Please check your email for connfirmation alert"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_is_on_the_homepage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat gmibank_team06.step_definitions.RegistrationStepDefinitions.user_is_on_the_homepage(RegistrationStepDefinitions.java:15)\r\n\tat ✽.user is on the homepage(file:///C:/Users/keske/IdeaProjects/gmibank/src/test/resources/features/Registration1.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on the usericon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_on_the_usericon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_select_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@snn_number"
    },
    {
      "name": "@TC_01_02_03_04"
    }
  ]
});
formatter.step({
  "name": "user click SSN textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_SSN_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid SSN number \"123-23-3456\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_SSN_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click name textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_name_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid name \"Ayse\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click lastname textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_lastname_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid lastname \"Demir\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_lastname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_address_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid address \"12 column way\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click mobile phone textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_mobile_phone_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid mobile phone number \"221-231-1111\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_mobile_phone_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click username textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_username_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid username \"AyseD\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_email_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid email \"aysedemir@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_email(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_password_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid password \"Ad192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click confirmation password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_confirmation_password_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter confirmation password \"Ad192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_confirmation_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user get success message \"Registration saved! Please check your email for connfirmation alert\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_is_on_the_homepage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat gmibank_team06.step_definitions.RegistrationStepDefinitions.user_is_on_the_homepage(RegistrationStepDefinitions.java:15)\r\n\tat ✽.user is on the homepage(file:///C:/Users/keske/IdeaProjects/gmibank/src/test/resources/features/Registration1.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on the usericon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_on_the_usericon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_select_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@snn_number"
    },
    {
      "name": "@TC_01_02_03_04"
    }
  ]
});
formatter.step({
  "name": "user click SSN textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_SSN_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid SSN number \"000-12-1233\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_SSN_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click name textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_name_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid name \"Veli\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click lastname textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_lastname_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid lastname \"Isik\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_lastname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_address_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid address \"2 Daisy St\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click mobile phone textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_mobile_phone_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid mobile phone number \"671-123-4556\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_mobile_phone_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click username textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_username_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid username \"VeliI\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_email_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid email \"veliisik@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_email(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_password_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid password \"Vi192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click confirmation password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_confirmation_password_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter confirmation password \"Vi192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_confirmation_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user get success message \"Registration saved! Please check your email for connfirmation alert\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_is_on_the_homepage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat gmibank_team06.step_definitions.RegistrationStepDefinitions.user_is_on_the_homepage(RegistrationStepDefinitions.java:15)\r\n\tat ✽.user is on the homepage(file:///C:/Users/keske/IdeaProjects/gmibank/src/test/resources/features/Registration1.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on the usericon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_on_the_usericon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_select_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@snn_number"
    },
    {
      "name": "@TC_01_02_03_04"
    }
  ]
});
formatter.step({
  "name": "user click SSN textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_SSN_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid SSN number \"456-00-9876\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_SSN_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click name textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_name_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid name \"Ali\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click lastname textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_lastname_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid lastname \"Kuz\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_lastname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_address_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid address \"13 Row St\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click mobile phone textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_mobile_phone_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid mobile phone number \"765-321-9090\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_mobile_phone_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click username textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_username_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid username \"AliK\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_email_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid email \"alikuz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_email(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_password_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid password \"Ak192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click confirmation password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_confirmation_password_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter confirmation password \"Ak192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_confirmation_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user get success message \"Registration saved! Please check your email for connfirmation alert\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_is_on_the_homepage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat gmibank_team06.step_definitions.RegistrationStepDefinitions.user_is_on_the_homepage(RegistrationStepDefinitions.java:15)\r\n\tat ✽.user is on the homepage(file:///C:/Users/keske/IdeaProjects/gmibank/src/test/resources/features/Registration1.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on the usericon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_on_the_usericon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_select_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@snn_number"
    },
    {
      "name": "@TC_01_02_03_04"
    }
  ]
});
formatter.step({
  "name": "user click SSN textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_SSN_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid SSN number \"900-12-1233\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_SSN_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click name textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_name_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid name \"Can\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click lastname textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_lastname_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid lastname \"Yavuz\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_lastname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_address_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid address \"22 Table Way\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click mobile phone textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_mobile_phone_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid mobile phone number \"876-123-1212\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_mobile_phone_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click username textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_username_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid username \"CanY\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click email textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_email_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid email \"canyavuz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_email(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_password_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid password \"Cy192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_valid_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click confirmation password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_confirmation_password_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter confirmation password \"Cy192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_enter_confirmation_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.RegistrationStepDefinitions.user_click_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user get success message \"Registration saved! Please check your email for connfirmation alert\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});