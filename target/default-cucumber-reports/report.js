$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_010_Address.feature");
formatter.feature({
  "name": "Address",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@User_story_010"
    }
  ]
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "go to Create or edit a Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_010"
    }
  ]
});
formatter.step({
  "name": "user go to GMI home page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_go_to_GMI_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click sig in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_sig_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_enter_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_enter_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click my operation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_my_operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click manage Customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_manage_Customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Create a new Customer button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_Create_a_new_Customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_Address"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user leave clear textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_leave_clear_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_Address"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid data for address",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_enter_valid_data_for_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should not see any message for address",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.should_not_see_any_message_for_address()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_City"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user leave clear textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_leave_clear_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error message for city",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message_for_city()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_City"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid data for city",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_enter_valid_data_for_city()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should not see any message for city",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.should_not_see_any_message_for_city()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_Country"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user leave clear textbox for country",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_leave_clear_textbox_for_country()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error message for country",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message_for_country()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_State"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user leave clear textbox for state",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_leave_clear_textbox_for_state()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error message for state",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message_for_state()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_State"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid data for state",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_enter_valid_data_for_state()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
});