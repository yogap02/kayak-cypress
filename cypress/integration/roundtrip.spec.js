/* This test code are use to make and automation demo for https://www.kayak.ch/
 * Any usage from other than https://www.kayak.ch/ and author are forbid to use this code
 *
 * Author : Yoga Pasramakrisnan - 2022
 */

import '../support/roundflight'
import { testDataJson } from '../fixtures/testData'

const BASEURL = Cypress.env(Cypress.env('selected')).baseUrl

describe('Make sure that the flight is a roundtrip flight', () => {

  testDataJson.forEach((row) => {

    it(`Perform test on ${row.departure} to ${row.destination}`, () => {
      cy.visit(BASEURL)
      cy.contains('Nein, danke', {timeout:20000}).should('be.visible').click()
      cy.get('section[class="title-section"]').then((text) => {
        expect(text[0].innerText.replace(/\s/g,'')).to.eq('Willkommen!FindeflexibleFlügefürdeinenächsteReise.')
      })
      cy.get('div[class*="has-compact-logo"]').should('be.visible')

      // Fill the departure and destination
      cy.get('div[aria-label="Entfernen"]').should('be.visible').first().click()
      cy.get('input[placeholder="Von?"]').type(row.departure)
      cy.get('li[role="tab"]').should('include.text', row.departure).find('input[type="checkbox"]').first().click().trigger('keydown', { keyCode: 27})
      cy.get('div[aria-label="Eingabe Flugziel"]').should('be.visible').first().click()
      cy.get('input[placeholder="Nach?"]').type(row.destination)
      cy.get('li[role="tab"]').should('include.text', row.destination).find('input[type="checkbox"]').first().click().trigger('keydown', { keyCode: 27})
      cy.get('div[aria-label="Eingabe Abflughafen"]').first().should('include.text', row.departure)
      cy.get('div[aria-label="Eingabe Flugziel"]').first().should('include.text', row.destination)  
      cy.log(`Successfully input for flight ${row.departure} to ${row.destination}`)

      // Fill the date is tricky due to the not-unique of whole date picker element ( need more time to do this, skip this for now)
      
      cy.get('button[aria-label="Suchen"]').first().click()

      // Check all the flight is in pair ( roundtrip )
      cy.get('div[class*="Flights-Results-FlightResultItem"]', {timeout:30000}).should('be.visible').wait(10000)
      cy.get('div[class*="Flights-Results-FlightResultItem"]').then((result) => {
        for (let item in result){
          if (!isNaN(item)){
            cy.get(result[item]).find('[class="mainInfo"]').find('li').its('length').should('be.gte', 2)
          }
        }
      })
      cy.log('All the flight search result are in roundtrip. Success !')

      // Utilizing the data filter ( price ) is complicated, it will take longer that a day to implement.
    })

  })

})

