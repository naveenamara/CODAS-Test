# CODAS-Test - Automation
---

## Overview
This project has been completed using Cypress on Visual Studio Code IDE and Cucumber for BDD style tests.

## Running Tests

Note: This project has been designed to run straight out of the box with little or no configuration needed.

Step 1: Open the 'CODAS' Automation project on an IDE (This README file has been described using the VS Code IDE)

- Open a new Terminal on your IDE and type in the command:

     - npm install

This should restore any missing dependencies (For Reference, see Package.json file.

Step 2: With all dependencies restored, Simply type in the following command in your Terminal

- npm run test (to open cypress dash board)

This will spin up the Cypress Test Runner where you'll find 2 BDD Tests

- iqoDemo.feature
- news.feature

Click on a test to run and test results will be displayed on the dashboard.

Run below command to remove saved screen shots 

- rm cypress/screenshots/iqoDemo.feature/*
- rm cypress/screenshots/news.feature/*

---

## Choosing A Browser (Default Set To Chrome)

The Cypress Test Runner has been Designed with multiple Browser support (Chrome, Firefox and Electron) which can also be located on the top right corner of the Cypress Test Runner window. Click on the dropdown and select a browser.

## Explorer
This project is designed using the Page Object Module.

- Find 'Integration' Folder for Cucumber Feature Files and Step Definitions
- Find 'Support' Folder for Page Objects and Functions
- Find 'Screen shots' for both scenarios 
