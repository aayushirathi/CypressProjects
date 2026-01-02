/// <reference types = "Cypress" />

describe("Check UI Elements", ()=>{
    it("Checking Radio Button",()=>{
        cy.visit("https://practice.expandtesting.com/radio-buttons")
        cy.get("input#blue").should("be.visible")
        cy.get("input#red").should("be.visible")


        cy.get("input#red").check().should("be.checked")
        cy.get("input#blue").should("not.be.checked")
    })

    // it("Check Radio Buttons",()=>{
    //     cy.visit("https://practice.expandtesting.com/checkboxes")
    //     // cy.get("label[for='checkbox1']").check().should("be.checked")
    //     // cy.get("label[for='checkbox2']").uncheck().should("not.be.checked") 
    //     cy.get("label.form-check-label").check
    // })
})