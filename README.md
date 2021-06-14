# cbatechtest

# Project Title:  
cbatechtest

# Framework , tools and coding language used.
Programming Language :Java

# Framework :
BDD Framework ,Data Driven

# Automation tool :
Selenium

# Build tool:
Maven

Getting Started:
These instructions will get you a copy of the project up and running on your local machine .

Prerequisites
Install java ,Maven , IDE( Eg. eclipse)

Running the tests
clone the repository and store in local system.

project location = the location of the project on your local system

Location of the automation scripts :

projectlocation\src\test\java

Feature file path : projectlocation\src\test\java\features\

Runner file path : projectlocation\src\test\java\runner\

Step Definition path: projectlocation\src\test\java\seleniumgluecode\

------------------------------------------------
changing the chrome driver path is optional:
open the project in any IDE(example: eclipse).

I have uploaded the chromedriver to the repository. The runner class will pick the chromedriver which is in the project folder itself.

You can change the path of the chromedriver if you like to or else not required. Navigate to the step Definition path (projectlocation\src\test\java\seleniumgluecode\Test.java)

Update the chrome driver path as per your local system.

System.setProperty("webdriver.chrome.driver",".\\chromedriver.exe");

------------------------------------------------
1.Open command prompt

2.Open the command prompt and cd(change directory) until the project root directory.( change directory till the folder where pom.xml exists )

3.Since it’s a Maven project and have added Cucumber in test scope dependency and all features are also added in src/test packages,

run the following command in the command prompt:

mvn test
4.You would notice that Testrunner file is executed.

Reports
Once the Exeuction is completed Refresh the project

We will get two type of reports after the execution

Cucumber HTML Reports:
To check the HTML reports Navigate to the below path

Go to project folder -→Target-→htmlreports-→index.html

Cucumber Extent Reports:
Go to project folder -→target -→ cucumber-reports -→ report.html



 Run the Testrunner.

The automation suite will be executed

