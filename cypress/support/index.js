// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

const addContext = require('mochawesome/addContext')

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
      let screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
      screenshotFileName = screenshotFileName.replace(' ','%20')
      screenshotFileName = screenshotFileName.replace('#','%23')
      addContext({ test }, `assets/images/${Cypress.spec.name}/${screenshotFileName}`)
  }
})

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})