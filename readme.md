# Test Script for Validating All Roundtrip Flight Result

Hi! This is Automation Test code requested by https://www.kayak.ch/ to Yoga Pasramakrisnan as this code author. If you are now from both parties or related to both parties please do not interact with this code

## Specifications :

**Test Tool** :  [Cypress](https://www.cypress.io/)
**Dependencies** : Can be look at package.json
**Reporter** :  [Mochawesome](https://www.npmjs.com/package/mochawesome)

## Input Data Test

Data test should be provided using JSON object inside testData.js in fixture folder.
`cypress\fixtures\testData.js`

To improving this one, we could implement some kind of bash file to porting the test data from any kind of file type ( such us xls, csv or json ) to directly input to this testData.js

## How to Run

 - Make sure you have Install cypress `npm install cypress -g`
 - Make sure you have Install the dependencies `npm i`
 - Make sure you have put the proper base URL for each env in `cypress.json`
 - Open terminal in root folder ( inside ./cypress/ ) and typing `npm run test`
 - Once the test done you can generate the report by `npm run reporter` , the report will be ready in : `cypress\report\mochawesome-report\report.html`

## Deviation

Due to the time limit, deviation were made :
- Interaction with date picker element
- Interaction with price filter in search result page.

Reason : 
The biggest obstacle of all is that the element is mostly dynamic and doesn't event have a unique ID ( refer [here](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements) )

## Follow Up

Any suggestion and follow up should be reaching 
Yoga Pasramakrisnan
yogalaxy69@gmail.com