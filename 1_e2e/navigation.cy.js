describe("Navigation",()=>{
    it("NavigationTest",()=>{
        cy.visit("https://www.cypress.io/") //Cypress
        cy.wait(3000)


        cy.get("body > header:nth-child(5) > div:nth-child(3) > astro-island:nth-child(4) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)")
        .click() //Pricing
        cy.url().should("eq","https://www.cypress.io/pricing")
        cy.wait(3000)


        cy.go("back") //Cypress
        cy.wait(3000)


        cy.go("forward") //Pricing
        cy.url().should("eq","https://www.cypress.io/pricing")
        cy.wait(3000)


        cy.go(-1) //Cypress
        cy.wait(3000)


        cy.go(1)  //Pricing
        cy.url().should("eq","https://www.cypress.io/pricing")
        cy.wait(3000)

        cy.reload()
    })
})