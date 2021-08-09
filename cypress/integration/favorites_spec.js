describe('Favorites page view', () => {

  beforeEach (() => {
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
  })

  it('Should show the user a url that includes futureVisits', () => {
    cy.get('a[class="future-trip-nav"]').click()
    cy.url('http://localhost:3000/futureVisits')
  })


  
})