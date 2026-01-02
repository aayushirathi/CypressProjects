describe("MyTestSuite",()=>{
    before(()=>{
        cy.log("** before executed **")
    })

    
    after(()=>{
        cy.log("** after executed **")
    })


    beforeEach(()=>{
        cy.log("** beforeEach executed **")
    })


    afterEach(()=>{
        cy.log("** afterEach executed **")
    })


    it("search",()=>{
        cy.log("** search test **")
    })


    it("advanced search",()=>{
        cy.log("** advanced search test **")
    })


    it("listing procedures",()=>{
        cy.log("** listing procedures test **")
    })
})