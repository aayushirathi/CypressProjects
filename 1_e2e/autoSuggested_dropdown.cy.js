describe("AutoSuggested_dropdown",()=>{
    it("AutoSuggested_dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Delhi")
        cy.get(".suggestion-link").contains("Delhi University").click()
    })
})