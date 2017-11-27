$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("B00-computerDBOverlay.feature");
formatter.feature({
  "line": 1,
  "name": "Validate elements are displayed in computer database layout",
  "description": "\r\nIn order to perform actions with the page elements\r\nwe need to verify if all those elements are displayed.",
  "id": "validate-elements-are-displayed-in-computer-database-layout",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Validate element exist in computer database layout",
  "description": "",
  "id": "validate-elements-are-displayed-in-computer-database-layout;validate-element-exist-in-computer-database-layout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-00"
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
  "name": "I validate masterhead is displayed with title text",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I validate masterhead title is clickable",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I validate subtitle is displayed and show available resources",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I validate search box exist in page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I validate filter by name button is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I validate add new computer button is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I validate table is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I validate pagination buttons exist",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerDBOverlay.userOpenPage()"
});
formatter.result({
  "duration": 8048673996,
  "status": "passed"
});
formatter.match({
  "location": "ComputerDBOverlay.masterheadIsDisplayed()"
});
formatter.result({
  "duration": 69402084,
  "status": "passed"
});
formatter.match({
  "location": "ComputerDBOverlay.mastheadIsClickable()"
});
formatter.result({
  "duration": 1138793494,
  "status": "passed"
});
formatter.match({
  "location": "ComputerDBOverlay.headerIsDisplayedWithResources()"
});
formatter.result({
  "duration": 165440022,
  "status": "passed"
});
formatter.match({
  "location": "ComputerDBOverlay.searchboxIsDisplayed()"
});
formatter.result({
  "duration": 279992,
  "status": "passed"
});
formatter.match({
  "location": "ComputerDBOverlay.filterButtonIsDisplayed()"
});
formatter.result({
  "duration": 71435,
  "status": "passed"
});
formatter.match({
  "location": "ComputerDBOverlay.addIsDisplayed()"
});
formatter.result({
  "duration": 18265219,
  "status": "passed"
});
formatter.match({
  "location": "ComputerDBOverlay.tableIsDisplayed()"
});
formatter.result({
  "duration": 498814,
  "status": "passed"
});
formatter.match({
  "location": "ComputerDBOverlay.paginationBttnExist()"
});
formatter.result({
  "duration": 70203,
  "status": "passed"
});
formatter.uri("B01-computerCreate.feature");
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
  "line": 17,
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
      "line": 18,
      "id": "create-new-computer-register;create-new-computer-register;;1"
    },
    {
      "cells": [
        "Nokia 3310 - 3G",
        "1999-08-03",
        "2099-08-03",
        "Nokia"
      ],
      "line": 19,
      "id": "create-new-computer-register;create-new-computer-register;;2"
    },
    {
      "cells": [
        "Canon EOS 1300D",
        "1999-08-03",
        "2099-08-03",
        "Canon"
      ],
      "line": 20,
      "id": "create-new-computer-register;create-new-computer-register;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
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
  "name": "I fill in computer name field with \"Nokia 3310 - 3G\"",
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
  "location": "ComputerCreate.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 295341076,
  "status": "passed"
});
formatter.match({
  "location": "ComputerCreate.add()"
});
formatter.result({
  "duration": 1071912577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia 3310 - 3G",
      "offset": 36
    }
  ],
  "location": "ComputerCreate.computerName(String)"
});
formatter.result({
  "duration": 87687420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999-08-03",
      "offset": 38
    }
  ],
  "location": "ComputerCreate.introducedDate(String)"
});
formatter.result({
  "duration": 22443352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2099-08-03",
      "offset": 40
    }
  ],
  "location": "ComputerCreate.discontinuedDate(String)"
});
formatter.result({
  "duration": 11268273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia",
      "offset": 10
    }
  ],
  "location": "ComputerCreate.selectCompany(String)"
});
formatter.result({
  "duration": 26663771,
  "status": "passed"
});
formatter.match({
  "location": "ComputerCreate.createThisComputer()"
});
formatter.result({
  "duration": 438979841,
  "status": "passed"
});
formatter.match({
  "location": "ComputerCreate.verifySuccessMessage()"
});
formatter.result({
  "duration": 19512049,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
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
  "name": "I fill in computer name field with \"Canon EOS 1300D\"",
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
  "location": "ComputerCreate.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 497971694,
  "status": "passed"
});
formatter.match({
  "location": "ComputerCreate.add()"
});
formatter.result({
  "duration": 987468475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canon EOS 1300D",
      "offset": 36
    }
  ],
  "location": "ComputerCreate.computerName(String)"
});
formatter.result({
  "duration": 307604103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999-08-03",
      "offset": 38
    }
  ],
  "location": "ComputerCreate.introducedDate(String)"
});
formatter.result({
  "duration": 9803853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2099-08-03",
      "offset": 40
    }
  ],
  "location": "ComputerCreate.discontinuedDate(String)"
});
formatter.result({
  "duration": 13787797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canon",
      "offset": 10
    }
  ],
  "location": "ComputerCreate.selectCompany(String)"
});
formatter.result({
  "duration": 145872138,
  "status": "passed"
});
formatter.match({
  "location": "ComputerCreate.createThisComputer()"
});
formatter.result({
  "duration": 263915375,
  "status": "passed"
});
formatter.match({
  "location": "ComputerCreate.verifySuccessMessage()"
});
formatter.result({
  "duration": 15005479,
  "status": "passed"
});
formatter.uri("B02-computerRead.feature");
formatter.feature({
  "line": 1,
  "name": "Read existing computer register",
  "description": "\r\nIn order to find an existing register\r\nI want to find it in the database",
  "id": "read-existing-computer-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "read computer register",
  "description": "",
  "id": "read-existing-computer-register;read-computer-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-02"
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
  "name": "I fill in filter field with \"\u003cName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter by name button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the \"\u003cName\u003e\" computer link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see the introduced date \"\u003cIntroducedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the discontinued date \"\u003cDiscontinuedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the company \"\u003ccompanyName\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "read-existing-computer-register;read-computer-register;",
  "rows": [
    {
      "cells": [
        "Name",
        "IntroducedDate",
        "DiscontinuedDate",
        "companyName"
      ],
      "line": 17,
      "id": "read-existing-computer-register;read-computer-register;;1"
    },
    {
      "cells": [
        "Nokia 3310 - 3G",
        "1999-08-03",
        "2099-08-03",
        "Nokia"
      ],
      "line": 18,
      "id": "read-existing-computer-register;read-computer-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "read computer register",
  "description": "",
  "id": "read-existing-computer-register;read-computer-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-02"
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
  "name": "I fill in filter field with \"Nokia 3310 - 3G\"",
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
  "name": "I should see the \"Nokia 3310 - 3G\" computer link",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see the introduced date \"1999-08-03\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the discontinued date \"2099-08-03\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the company \"Nokia\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ComputerCreate.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 381687650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia 3310 - 3G",
      "offset": 29
    }
  ],
  "location": "ComputerUpdate.computerSearch(String)"
});
formatter.result({
  "duration": 841814336,
  "status": "passed"
});
formatter.match({
  "location": "ComputerUpdate.clickFilterButtn()"
});
formatter.result({
  "duration": 178003159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia 3310 - 3G",
      "offset": 18
    }
  ],
  "location": "ComputerUpdate.seeComputerLink(String)"
});
formatter.result({
  "duration": 24034220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999-08-03",
      "offset": 34
    }
  ],
  "location": "ComputerRead.introducedDateField(String)"
});
formatter.result({
  "duration": 485703741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2099-08-03",
      "offset": 36
    }
  ],
  "location": "ComputerRead.discontinuedDateField(String)"
});
formatter.result({
  "duration": 28092473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia",
      "offset": 26
    }
  ],
  "location": "ComputerRead.companyField(String)"
});
formatter.result({
  "duration": 11555245,
  "status": "passed"
});
formatter.uri("B03-computerUpdate.feature");
formatter.feature({
  "line": 1,
  "name": "Update existing computer register",
  "description": "\r\nIn order to update a computer register\r\nI want to populate the fields with new data info",
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
      "name": "@BACKBASE-03"
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
  "name": "I fill in filter field with \"\u003cName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter by name button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the \"\u003cName\u003e\" computer link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click \"\u003cName\u003e\" link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I update computer name field with \"\u003cNameUpdate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I update introduced date field with \"\u003cIntroducedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I update discontinued date field with \"\u003cDiscontinuedDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I update \"\u003ccompanyName\u003e\" option",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click save this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify update message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "update-existing-computer-register;update-computer-register;",
  "rows": [
    {
      "cells": [
        "Name",
        "NameUpdate",
        "IntroducedDate",
        "DiscontinuedDate",
        "companyName"
      ],
      "line": 21,
      "id": "update-existing-computer-register;update-computer-register;;1"
    },
    {
      "cells": [
        "Nokia 3310 - 3G",
        "Nokia 3310 - DonkerBlau",
        "1579-01-31",
        "3579-01-31",
        "RCA"
      ],
      "line": 22,
      "id": "update-existing-computer-register;update-computer-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "update computer register",
  "description": "",
  "id": "update-existing-computer-register;update-computer-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-03"
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
  "name": "I fill in filter field with \"Nokia 3310 - 3G\"",
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
  "name": "I should see the \"Nokia 3310 - 3G\" computer link",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click \"Nokia 3310 - 3G\" link",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I update computer name field with \"Nokia 3310 - DonkerBlau\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I update introduced date field with \"1579-01-31\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I update discontinued date field with \"3579-01-31\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I update \"RCA\" option",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click save this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify update message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerCreate.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 230315419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia 3310 - 3G",
      "offset": 29
    }
  ],
  "location": "ComputerUpdate.computerSearch(String)"
});
formatter.result({
  "duration": 1291847735,
  "status": "passed"
});
formatter.match({
  "location": "ComputerUpdate.clickFilterButtn()"
});
formatter.result({
  "duration": 260571883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia 3310 - 3G",
      "offset": 18
    }
  ],
  "location": "ComputerUpdate.seeComputerLink(String)"
});
formatter.result({
  "duration": 18862564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia 3310 - 3G",
      "offset": 9
    }
  ],
  "location": "ComputerUpdate.clickComputerLinkFound(String)"
});
formatter.result({
  "duration": 155921910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia 3310 - DonkerBlau",
      "offset": 35
    }
  ],
  "location": "ComputerUpdate.updateComputerName(String)"
});
formatter.result({
  "duration": 38622583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1579-01-31",
      "offset": 37
    }
  ],
  "location": "ComputerUpdate.updateIntroducedDate(String)"
});
formatter.result({
  "duration": 44006081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3579-01-31",
      "offset": 39
    }
  ],
  "location": "ComputerUpdate.updateDiscontinuedDate(String)"
});
formatter.result({
  "duration": 38249397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RCA",
      "offset": 10
    }
  ],
  "location": "ComputerUpdate.updateSelectCompany(String)"
});
formatter.result({
  "duration": 50956225,
  "status": "passed"
});
formatter.match({
  "location": "ComputerUpdate.saveThisComputer()"
});
formatter.result({
  "duration": 326672762,
  "status": "passed"
});
formatter.match({
  "location": "ComputerUpdate.verifyUpdateMessage()"
});
formatter.result({
  "duration": 19800663,
  "status": "passed"
});
formatter.uri("B04-computerDelete.feature");
formatter.feature({
  "line": 1,
  "name": "Delete existing computer register",
  "description": "\r\nIn order to delete a computer register\r\nI want to click delete button",
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
      "name": "@BACKBASE-04"
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
  "name": "I fill in filter field with \"\u003cName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click filter by name button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the \"\u003cName\u003e\" computer link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click \"\u003cName\u003e\" link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click delete this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify delete message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "delete-existing-computer-register;delete-computer-register;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 17,
      "id": "delete-existing-computer-register;delete-computer-register;;1"
    },
    {
      "cells": [
        "Canon EOS 1300D"
      ],
      "line": 18,
      "id": "delete-existing-computer-register;delete-computer-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "delete computer register",
  "description": "",
  "id": "delete-existing-computer-register;delete-computer-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@BACKBASE-04"
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
  "name": "I fill in filter field with \"Canon EOS 1300D\"",
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
  "name": "I should see the \"Canon EOS 1300D\" computer link",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click \"Canon EOS 1300D\" link",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click delete this computer button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify delete message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerCreate.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 214107449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canon EOS 1300D",
      "offset": 29
    }
  ],
  "location": "ComputerUpdate.computerSearch(String)"
});
formatter.result({
  "duration": 786484559,
  "status": "passed"
});
formatter.match({
  "location": "ComputerUpdate.clickFilterButtn()"
});
formatter.result({
  "duration": 137804898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canon EOS 1300D",
      "offset": 18
    }
  ],
  "location": "ComputerUpdate.seeComputerLink(String)"
});
formatter.result({
  "duration": 21775392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canon EOS 1300D",
      "offset": 9
    }
  ],
  "location": "ComputerUpdate.clickComputerLinkFound(String)"
});
formatter.result({
  "duration": 185917676,
  "status": "passed"
});
formatter.match({
  "location": "ComputerUpdate.deleteThisComputer()"
});
formatter.result({
  "duration": 252824869,
  "status": "passed"
});
formatter.match({
  "location": "ComputerUpdate.verifyDeleteMessage()"
});
formatter.result({
  "duration": 131306766,
  "status": "passed"
});
});