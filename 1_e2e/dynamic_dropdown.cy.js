/// <reference types = "cypress" />

describe("Dynamic Dropdown",()=>{
    it("Dynamic_dropdown",()=>{
        cy.visit("https://www.google.com/")
        cy.get(".gLFyf").type("cypress automation")

        cy.wait(3000)

        cy.get(".wM6W7d").should("have.length",13)
        cy.get(".wM6W7d").each( ($el,index,$list)=>{
            if($el.text()== "cypress automation tutorial"){
                cy.wrap($el).click()
            }
        } )
    })
})