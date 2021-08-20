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
        body: data
      })
    })

    cy.fixture('sunData').then(results => {
      cy.intercept('GET', 'https://api.sunrise-sunset.org/json?lat=36.83682216&lng=--107.9999245}&date=2021-08-11', {
        statusCode: 201,
        body: results
      })
    })

    cy.visit("http://localhost:3000")

        cy.get('path[data-name="NM"]').click()
        cy.get('article[class="park-card"]').contains('Aztec Ruins')
          .get('button').contains('Details').click()
  })

  it('Should have a url that is specific to the park', () => {
    cy.url('http://localhost:3000/details/azru')
  } )

  it('Should render a page with an image and basic park info', () => {
    cy.get('img[class="detail-image"]').should('have.attr', 'src', 'https://www.nps.gov/common/uploads/structured_data/3C80AFE4-1DD8-B71B-0BE2EEFC92413401.jpg')
      .get('h3').contains('Welcome to Aztec Ruins National Monument!')
      .get('p[class="details-address"]').contains('Aztec, NM')
      .get('p[class="description"]')
  }) 

  it('Should show the user a calendar to pick a date from and display sunrise and sunset times', () => {
    cy.get('div[class="react-calendar calendar"]')
      .get('span').contains('August 2021')
      .get('abbr').contains('31').click()
      .get('p[class="selected-date"]').contains('Current selected date is: August 31st 2021')
  })
  
  it('Should show the user sunrise and sunset times for a given date at that park', () => {
    cy.get('abbr').contains('31').click()
      .get('h5').contains('Sunrise: 5:29:05 AM')
      .get('h5').contains('Sunset: 6:31:23 PM')
  })

  it('Should allow the user to add this to their future trips', () => {
    cy.get('button[class="add-trip"]').contains('Add to Future Trips!').click()
  })

  it('Should show the user a list of activities at that park', () => {
    cy.get('section[class="activities"]')
      cy.get('p[class="other-activities"]').contains('Other Activities in the Park')
  })

  it('Should allow the user to go back to the list of parks from the details page', () => {
    cy.get('img[class="go-back"]').click()
      .get('article[class="park-card"]')
      .get('h3').contains('Aztec Ruins')
      .get('h3').contains('Bandelier')
     cy.url().should('include', '/parksByState')
  })

  it('Should allow the user to return home from favorites', () => {
    cy.get('h1').click()
      .get('h2').contains("Welcome to Horizon Hikes! Please choose a state below to start planing your trip!")
  })
  
})


