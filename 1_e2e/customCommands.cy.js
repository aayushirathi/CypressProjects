describe("Custom Commands",()=>{

    it("handling links",()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Apple MacBook Pro")
        cy.get("div[class='product-name'] h1").should("have.text","Apple MacBook Pro")
    })


    // it("overwriting existing command",()=>{

    // })


    it.only("Login command",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.loginapp("Admin","admin123")
    })

})