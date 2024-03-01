describe('Dive ui', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept("GET", "http://localhost:8080/api/v1/sushi", {
      statusCode: 200,
      fixture: '../fixtures/fish'
    }).as('getFish')
  })

  it('When I visit the page, i should see a title', () => {
    cy.get("h1").should('contain','dive')
  })

  it('When I click the "explore" button, im redirected to see a list of fish', () => {
    cy.wait('@getFish')
    cy.get(".call-to-action")
    .find("a").click()
    .get(".main-content .fish-card").first()
    .find("img").should("exist")
    .get(".main-content .fish-card").first()
    .contains("h3", "Maguro (マグロ)").should("exist")
    .get(".main-content .fish-card").first()
    .contains("h3", "Tuna").should("exist")

    cy.get(".main-content .fish-card").last()
    .find("img").should("exist")
    .get(".main-content .fish-card").last()
    .contains("h3", "Aburasokomutsu (アブラソコムツすし)")
    .get(".main-content .fish-card").last()
    .contains("h3", "Escolar")
  })

  it('When i click on the arrow button, im directed to a page with details about the fish', () => {
    cy.wait('@getFish')
    cy.get(".call-to-action")
    .find("a").click()
    .get(".main-content .fish-card").first()
    .find(".go-btn").click()

    cy.get(".fish-details-container").find("img").should("exist")
    .get("article").contains("h2", "Maguro (マグロ)").should("exist")
    .get("article").contains("h2", "Tuna").should("exist")
  })

  it('In the fish details view, I can press the back arrow to direct me back to the main page', () => {
    cy.wait('@getFish')
    cy.get(".call-to-action")
    .find("a").click()
    .get(".main-content .fish-card").first()
    .find(".go-btn").click()

    cy.get(".go-btn").click()
    .get(".filter").should("exist")
    .get(".main-content").should("exist")
  })

  it('In the fish details view, I can press the home button to direct me back to the main page', () => {
    cy.wait('@getFish')
    cy.get(".call-to-action")
    .find("a").click()
    .get(".main-content .fish-card").first()
    .find(".go-btn").click()

    cy.get(".home-btn").click()
    .get(".filter").should("exist")
    .get(".main-content").should("exist")
  })

  it('In the fish details view, I can press the like button to add the fish to my favorites', () => {
    cy.wait('@getFish')
    cy.get(".call-to-action")
    .find("a").click()
    .get(".main-content .fish-card").first()
    .find(".go-btn").click()

    cy.get(".fav-btn").click()
    cy.get(".heart-btn").click()

    .get(".fav-card").should("exist")
    .get(".fav-card").contains("h3", "Maguro (マグロ)").should("exist")
    .get(".fav-card").contains("h3", "Tuna").should("exist")
  })

  it('In the main page view, I can press the like button to add the fish to my favorites', () => {
    cy.wait('@getFish')
    cy.get(".call-to-action")
    .find("a").click()
    .get(".main-content .fish-card").first()
    .find(".fav-btn").click()

    cy.get(".search-bar").find(".heart-btn").click()

    .get(".fav-card").should("exist")
    .get(".fav-card").contains("h3", "Maguro (マグロ)").should("exist")
    .get(".fav-card").contains("h3", "Tuna").should("exist")
  })

  it('In the favorites, i can remove a fish by clicking the heart button', () => {
    cy.wait('@getFish')
    cy.get(".call-to-action")
    .find("a").click()
    .get(".main-content .fish-card").first()
    .find(".go-btn").click()

    cy.get(".fav-btn").click()
    cy.get(".heart-btn").click()

    .get(".fav-card").should("exist")
    .find(".fav-btn").click()
    .get("p").contains("We're unable to reel in your catch.. Add some fish to your favorites!").should("exist")
  })

  it.only('When i click the dive name, im directed back to the hero page', () => {
    cy.get(".call-to-action").find("a").click()

    cy.get(".title-container").find("a").click()
    .get(".call-to-action").should("exist")
    .get(".images-container").should("exist")
  })

})