$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("servicecenterlocation.feature");
formatter.feature({
  "line": 1,
  "name": "Selecting Servlice center Location",
  "description": "Verify if user is able to select the required Service center",
  "id": "selecting-servlice-center-location",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "search service center",
  "description": "",
  "id": "selecting-servlice-center-location;search-service-center",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "navigate to nsw service center \u003cURL\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Locate us button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter suburb  \u003csuburb\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select the service center \u003cservicecenter\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "selecting-servlice-center-location;search-service-center;",
  "rows": [
    {
      "cells": [
        "URL",
        "suburb",
        "servicecenter"
      ],
      "line": 12,
      "id": "selecting-servlice-center-location;search-service-center;;1"
    },
    {
      "cells": [
        "\"https://www.service.nsw.gov.au/\"",
        "Sydney 2000",
        "Marrickville Service Centre"
      ],
      "line": 13,
      "id": "selecting-servlice-center-location;search-service-center;;2"
    },
    {
      "cells": [
        "\"https://www.service.nsw.gov.au/\"",
        "Sydney Domestic Airport 2020",
        "Rockdale Service Centre"
      ],
      "line": 14,
      "id": "selecting-servlice-center-location;search-service-center;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "search service center",
  "description": "",
  "id": "selecting-servlice-center-location;search-service-center;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "navigate to nsw service center \"https://www.service.nsw.gov.au/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Locate us button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter suburb  Sydney 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select the service center Marrickville Service Centre",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.service.nsw.gov.au/",
      "offset": 32
    }
  ],
  "location": "Test.navigate_to_nsw_service_center(String)"
});
formatter.result({
  "duration": 3674597000,
  "status": "passed"
});
formatter.match({
  "location": "Test.search_for_apply_for_numberplate()"
});
formatter.result({
  "duration": 2845921800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-JGO8BCH3\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\damod\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50063}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: da22105ea5d0b0d9ac7dcac506bf7913\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat seleniumgluecode.Test.search_for_apply_for_numberplate(Test.java:48)\r\n\tat ✽.When Search for Apply for a number plate(servicecenterlocation.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Test.click_on_locate_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney 2000",
      "offset": 14
    }
  ],
  "location": "Test.enter_suburb_sydney(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Marrickville Service Centre",
      "offset": 26
    }
  ],
  "location": "Test.select_the_service_center(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "search service center",
  "description": "",
  "id": "selecting-servlice-center-location;search-service-center;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "navigate to nsw service center \"https://www.service.nsw.gov.au/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Locate us button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter suburb  Sydney Domestic Airport 2020",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select the service center Rockdale Service Centre",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.service.nsw.gov.au/",
      "offset": 32
    }
  ],
  "location": "Test.navigate_to_nsw_service_center(String)"
});
formatter.result({
  "duration": 2256719800,
  "status": "passed"
});
formatter.match({
  "location": "Test.search_for_apply_for_numberplate()"
});
