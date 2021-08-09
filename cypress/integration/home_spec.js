describe('Home Page', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")

    cy.fixture('parksData').then(data => {
      cy.intercept('GET', 'https://developer.nps.gov/api/v1/activities/parks?&api_key=JBKNU4JYTZyyQrYagU2YsGhl1RrTBFuV3oz7BouA', {
        statusCode: 201,
        body: data, 
      })
    })
    
  })

  it('Should render a 404 if the url does not exist', () => {
    cy.visit('http://localhost:3000/sdfsd')
    cy.get('h2').contains('404: Page Not Found')
  })

 
})