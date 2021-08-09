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
  it("Should show the user a title and a message to choose a state", () => {
    cy.get("h1").contains("Horizon Hikes")
    cy.get("h2").contains("Welcome to Horizon Hikes! Please choose a state below to start planing your trip!")
  })

  it("Should show the user a map of the US", () =>{
    cy.get('svg[class="us-state-map"]')
  })
  
  it("Should allow a user to click on a state and render a list of parks and a new url", () => {
    cy.get('path[data-name="NM"]').click()
    cy.get('.card-container')
    cy.get('article[class="park-card"]')
      .get('h3').contains('Aztec Ruins')
      .get('h3').contains('Bandelier')
    cy.url().should('include', '/parksByState')
  })

  it('Shuold show the user a page with the park details when the details button is clicked', () => {

  })
 
})