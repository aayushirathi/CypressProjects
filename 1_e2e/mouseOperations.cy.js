import "cypress-iframe"
require ("@4tw/cypress-drag-drop")

describe("Mouse Operations",()=>{
    it("MouseHover",()=>{
        cy.visit("https://en.wikipedia.org/wiki/Cypress")

        cy.get(".mw-disambig").trigger("mouseover")

        cy.get(".mwe-popups-title").should("be.visible").click()
    })

    it("Right Click",()=>{ 
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        // Approach1
        // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")

        // Approach2
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span").should("be.visible")
    })

    it("Double Click",()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded("#iframeResult")

        // Approach1
        // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick")
        // cy.iframe("#iframeResult").find("#field2").should("have.value","Hello World!")

        // Approach2
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("#iframeResult").find("#field2").should("have.value","Hello World!")      
    })

    it("Drag and Drop using plugin",()=>{
        cy.visit("https://www.w3schools.com/html/html5_draganddrop.asp")
        cy.get("#img1").should("be.visible")
        cy.get("#div2").should("be.visible")

        cy.wait(3000)
        cy.get("#img1").drag("#div2",{force:true})
    })

    it.only("scrolling page",()=>{
        cy.visit("https://en.wikipedia.org/wiki/Web_page")
        cy.get("#CITEREFMelendez2018 > q").scrollIntoView({duration:2000})
        cy.get("#CITEREFMelendez2018 > q").should("be.visible")

        cy.get("#firstHeading > .mw-page-title-main").scrollIntoView({duration:2000})
        cy.get("#firstHeading > .mw-page-title-main").should("be.visible")
    })
})