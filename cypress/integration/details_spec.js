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

  it('Should show the user a calendar to pick a date from and display sunrise and sunset times', () => {
    cy.get('div[class="react-calendar calendar"]')
      .get('span').contains('August 2021')
      .get('abbr').contains('11').click()
      .get('p[class="selected-date"]').contains('Current selected date is: August 11th 2021')
  })
  
  it('Should show the user sunrise and sunset times for a given date at that park', () => {
    cy.get('abbr').contains('11').click()
      .get('h5').contains('Sunrise: 5:12:41 AM')
      .get('h5').contains('Sunset: 6:57:40 PM')
  })

  it('Should allow the user to add this to their future trips', () => {
    cy.get('button[class="add-trip"]').contains('Add to Future Trips!').click()
  })
  
 
  })


