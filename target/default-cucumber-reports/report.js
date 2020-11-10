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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click sig in button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter valid username",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter valid password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click sign in button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click my operation",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click manage Customer",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click Create a new Customer button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user leave clear textbox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});