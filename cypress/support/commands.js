// ***********************************************
// This example commands.js shows you how to
// create letious custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export function CSVtoJSON(csv){
  let lines=csv.split("\n");
  let result = [];
  let headers=lines[0].split(",")

  for(let i=1;i<lines.length;i++){
      let obj = {};
      let currentline=lines[i].split(",")
      for(let j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j]
      }

      result.push(obj);

  }

  return JSON.stringify(result)
}