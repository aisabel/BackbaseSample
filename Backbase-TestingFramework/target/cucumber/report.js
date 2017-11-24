$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Backbase01-Create.feature");
formatter.feature({
  "line": 1,
  "name": "Create new computer register",
  "description": "\r\nIn order to create a new computer register\r\nI want to fill in all  fields",
  "id": "create-new-computer-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Create new computer register",
  "description": "",
  "id": "create-new-computer-register;create-new-computer-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click Add a new computer button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in computer name field with \"\u003cName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill in introduced date field with \"\u003cIntroducedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I fill in discontinued date field with \"\u003cDiscontinuedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select \"\u003ccompanyName\u003e\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click create this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify success message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "create-new-computer-register;create-new-computer-register;",
  "rows": [
    {
      "cells": [
        "Name",
        "IntroducedDate",
        "DiscontinuedDate",
        "companyName"
      ],
      "line": 17,
      "id": "create-new-computer-register;create-new-computer-register;;1"
    },
    {
      "cells": [
        "Nokia v1",
        "1999-08-03",
        "2099-08-03",
        "Nokia"
      ],
      "line": 18,
      "id": "create-new-computer-register;create-new-computer-register;;2"
    },
    {
      "cells": [
        "1234567890123",
        "1999-08-03",
        "2099-08-03",
        "Canon"
      ],
      "line": 19,
      "id": "create-new-computer-register;create-new-computer-register;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3707324193,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create new computer register",
  "description": "",
  "id": "create-new-computer-register;create-new-computer-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click Add a new computer button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in computer name field with \"Nokia v1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill in introduced date field with \"1999-08-03\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I fill in discontinued date field with \"2099-08-03\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select \"Nokia\" option",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click create this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "createNewRegister.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 1779489666,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.add()"
});
formatter.result({
  "duration": 1274176987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia v1",
      "offset": 36
    }
  ],
  "location": "createNewRegister.computerName(String)"
});
formatter.result({
  "duration": 66329553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999-08-03",
      "offset": 38
    }
  ],
  "location": "createNewRegister.introducedDate(String)"
});
formatter.result({
  "duration": 14146615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2099-08-03",
      "offset": 40
    }
  ],
  "location": "createNewRegister.discontinuedDate(String)"
});
formatter.result({
  "duration": 16198938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia",
      "offset": 10
    }
  ],
  "location": "createNewRegister.selectCompany(String)"
});
formatter.result({
  "duration": 166070622,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.createThisComputer()"
});
formatter.result({
  "duration": 351152425,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.verifySuccessMessage()"
});
formatter.result({
  "duration": 16262162,
  "status": "passed"
});
formatter.before({
  "duration": 20191093,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create new computer register",
  "description": "",
  "id": "create-new-computer-register;create-new-computer-register;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click Add a new computer button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in computer name field with \"1234567890123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill in introduced date field with \"1999-08-03\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I fill in discontinued date field with \"2099-08-03\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select \"Canon\" option",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click create this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "createNewRegister.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 541422306,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.add()"
});
formatter.result({
  "duration": 1020113910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890123",
      "offset": 36
    }
  ],
  "location": "createNewRegister.computerName(String)"
});
formatter.result({
  "duration": 29669383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999-08-03",
      "offset": 38
    }
  ],
  "location": "createNewRegister.introducedDate(String)"
});
formatter.result({
  "duration": 12632929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2099-08-03",
      "offset": 40
    }
  ],
  "location": "createNewRegister.discontinuedDate(String)"
});
formatter.result({
  "duration": 11404164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canon",
      "offset": 10
    }
  ],
  "location": "createNewRegister.selectCompany(String)"
});
formatter.result({
  "duration": 56724405,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.createThisComputer()"
});
formatter.result({
  "duration": 341186816,
  "status": "passed"
});
formatter.match({
  "location": "createNewRegister.verifySuccessMessage()"
});
formatter.result({
  "duration": 12370180,
  "status": "passed"
});
formatter.uri("Backbase02-Update.feature");
formatter.feature({
  "line": 1,
  "name": "Update existing computer register",
  "description": "\r\nAs order to update a computer register\r\nI want to populate the fields with new data info",
  "id": "update-existing-computer-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "update computer register",
  "description": "",
  "id": "update-existing-computer-register;update-computer-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-004"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in filter field with \"\u003cNameSearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter by name button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click \"\u003cName\u003e\" link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I update computer name field with \"\u003cNameUpdate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I update introduced date field with \"\u003cIntroducedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I update discontinued date field with \"\u003cDiscontinuedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I update \"\u003ccompany\u003e\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click save this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify update message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "update-existing-computer-register;update-computer-register;",
  "rows": [
    {
      "cells": [
        "NameSearch",
        "Name",
        "IntroducedDate",
        "DiscontinuedDate",
        "company",
        "NameUpdate"
      ],
      "line": 20,
      "id": "update-existing-computer-register;update-computer-register;;1"
    },
    {
      "cells": [
        "Nokia v1",
        "Nokia v1",
        "1579-01-31",
        "3579-01-31",
        "RCA",
        "adfasdfasdf"
      ],
      "line": 21,
      "id": "update-existing-computer-register;update-computer-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16312249,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "update computer register",
  "description": "",
  "id": "update-existing-computer-register;update-computer-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-004"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in filter field with \"Nokia v1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter by name button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click \"Nokia v1\" link",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I update computer name field with \"adfasdfasdf\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I update introduced date field with \"1579-01-31\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I update discontinued date field with \"3579-01-31\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I update \"RCA\" option",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click save this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify update message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "createNewRegister.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 265403606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia v1",
      "offset": 29
    }
  ],
  "location": "updateRegister.searchboxField(String)"
});
formatter.result({
  "duration": 205735993,
  "error_message": "org.openqa.selenium.NoSuchElementException: Returned node was not a DOM element\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027LEDANNY\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: HtmlUnitDriver\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.findElementByCssSelector(HtmlUnitDriver.java:1252)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver$4.call(HtmlUnitDriver.java:1970)\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver$4.call(HtmlUnitDriver.java:1)\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.implicitlyWaitFor(HtmlUnitDriver.java:1606)\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.findElement(HtmlUnitDriver.java:1966)\r\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.findElement(HtmlUnitDriver.java:754)\r\n\tat pageObjects.computersPageObject.searchboxInput(computersPageObject.java:58)\r\n\tat stepDefinitions.updateRegister.searchboxField(updateRegister.java:29)\r\n\tat ✽.When I fill in filter field with \"Nokia v1\"(Backbase02-Update.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "updateRegister.filterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia v1",
      "offset": 9
    }
  ],
  "location": "updateRegister.clickLinkFound(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "adfasdfasdf",
      "offset": 35
    }
  ],
  "location": "updateRegister.updateName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1579-01-31",
      "offset": 37
    }
  ],
  "location": "updateRegister.updateIntroducedDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3579-01-31",
      "offset": 39
    }
  ],
  "location": "updateRegister.updateDiscontinuedDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "RCA",
      "offset": 10
    }
  ],
  "location": "updateRegister.updateSelectCompany(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "updateRegister.saveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "updateRegister.verifyUpdateMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Backbase03-Delete.feature");
formatter.feature({
  "line": 1,
  "name": "Delete existing computer register",
  "description": "\r\nAs order to delete a computer register\r\nI want to click delete button",
  "id": "delete-existing-computer-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "delete computer register",
  "description": "",
  "id": "delete-existing-computer-register;delete-computer-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-005"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is in computer homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in search field with \"\u003cNameSearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click \"\u003cName\u003e\" link to delete",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click delete this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify delete message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "delete-existing-computer-register;delete-computer-register;",
  "rows": [
    {
      "cells": [
        "NameSearch",
        "Name"
      ],
      "line": 16,
      "id": "delete-existing-computer-register;delete-computer-register;;1"
    },
    {
      "cells": [
        "Erikson v2",
        "Erikson v2"
      ],
      "line": 17,
      "id": "delete-existing-computer-register;delete-computer-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20590145,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "delete computer register",
  "description": "",
  "id": "delete-existing-computer-register;delete-computer-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-005"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is in computer homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in search field with \"Erikson v2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click \"Erikson v2\" link to delete",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click delete this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify delete message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "deleteRegister.userInHPage()"
});
formatter.result({
  "duration": 109529731,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:754)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat stepDefinitions.deleteRegister.userInHPage(deleteRegister.java:20)\r\n\tat ✽.Given user is in computer homepage(Backbase03-Delete.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Erikson v2",
      "offset": 29
    }
  ],
  "location": "deleteRegister.searchFieldr(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "deleteRegister.filterButtonr()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Erikson v2",
      "offset": 9
    }
  ],
  "location": "deleteRegister.clickDelLink(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "deleteRegister.deleteThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "deleteRegister.verifyDeleteMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Backbase04-Overlay.feature");
formatter.feature({
  "line": 1,
  "name": "Validate element exist in computer database layout",
  "description": "\r\nAs order to perform actions with the page elements\r\nwe need to verify if all those elements are displayed.",
  "id": "validate-element-exist-in-computer-database-layout",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11664861,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate element exist in computer database layout",
  "description": "",
  "id": "validate-element-exist-in-computer-database-layout;validate-element-exist-in-computer-database-layout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-001"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user open computers page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I validate masthead is displayed with title text",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I validate masthead title is clickable",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I validate title exist and display available resources",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I validate search box exist",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I validate filter by name button exist",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I validate table exist",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate pagination buttons exist",
  "keyword": "Then "
});
formatter.match({
  "location": "validateOverlay.userHP()"
});
formatter.result({
  "duration": 11840575,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:754)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:41)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:339)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:158)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:98)\r\n\tat stepDefinitions.validateOverlay.userHP(validateOverlay.java:18)\r\n\tat ✽.Given user open computers page(Backbase04-Overlay.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "validateOverlay.mastheadDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validateOverlay.mastheadClickable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validateOverlay.titleAvailable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validateOverlay.searchboxExist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validateOverlay.filterButtonExist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validateOverlay.tableExist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validateOverlay.paginationExist()"
});
formatter.result({
  "status": "skipped"
});
});