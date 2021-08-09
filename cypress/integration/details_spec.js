describe('Park Details Page', () => {
  
  beforeEach(() => {
    
    cy.fixture('parksData').then(data => {
      cy.intercept('GET', 'https://developer.nps.gov/api/v1/activities/parks?&api_key=JBKNU4JYTZyyQrYagU2YsGhl1RrTBFuV3oz7BouA', {
        statusCode: 201,
        body: data, 
      })
    })
    
    cy.fixture('detailsData').then(data => {
      cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=azru&api_key=JBKNU4JYTZyyQrYagU2YsGhl1RrTBFuV3oz7BouA', {
        statusCode: 201,
        delay: 100,
        body: data
      })
    })
    cy.visit("http://localhost:3000")

        cy.get('path[data-name="NM"]').click()
        cy.get('article[class="park-card"]').contains('Aztec Ruins')
          .get('button').contains('Details').click()
  })

      
  
 
  })


