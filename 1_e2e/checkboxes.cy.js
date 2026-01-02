describe("check box",()=>{
    it("check box example",()=>{
        cy.visit("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php")
        cy.get("#passport").should("be.visible")

        // selecting the checkbox
        cy.get("#passport").check().should("be.checked")

        // unselecting the checkbox
        cy.get("#passport").uncheck().should("not.be.checked")

        // selecting all the checkboxes
        cy.get("[type='checkbox']").check().should("be.checked")

        // unselecting all the checkboxes
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")

        // select first checkbox
        cy.get("[type='checkbox']").first().check()

        // select last checkbox
        cy.get("[type='checkbox']").last().check()

    })
})