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

  it('Should render a page with an image and basic park info', () => {
    cy.get('img[class="detail-image"]').should('have.attr', 'src', 'https://www.nps.gov/common/uploads/structured_data/3C80AFE4-1DD8-B71B-0BE2EEFC92413401.jpg')
      .get('h3').contains('Welcome to Aztec Ruins National Monument!')
      .get('p[class="details-address"]').contains('Aztec, NM')
      .get('p[class="description"]')
  }) 

 
      
  
 
  })


