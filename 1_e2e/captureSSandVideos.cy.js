describe("mysuite",()=>{
    

    it("Capture Screenshots and Videos",()=>{
        cy.visit("https://www.google.com/?zx=1757653152484&no_sw_cr=1")
        cy.screenshot("homepage")
        cy.wait(3000)
        cy.get("svg[aria-label='Google']").screenshot("logo")
    })


    it.only("run command",()=>{
        cy.visit("https://www.google.com/?zx=1757653152484&no_sw_cr=1")
        cy.get("div[class='FPdoLc lJ9FBc'] input[name='btnI']").click()
        cy.get("div[class='eyebrow'] span").contains("Library")
    })


})