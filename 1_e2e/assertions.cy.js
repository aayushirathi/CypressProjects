describe('Assertions demo',()=>{
    it('Implicit assertions', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // cy.url().should('include','orangehrm')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrmlive.com')

        // cy.url().should('include','orangehrm')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrmlive.com')

        // cy.url().should('include','orangehrm')
        // .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('contain','orangehrmlive.com')
        // .and('not.include','orangehrm123')
        // .and('not.eq','123')

        cy.title().should('include','HRM')
        .and('eq','OrangeHRM')
        .and('contain','Orange')

        cy.get('.orangehrm-login-branding > img').should('exist')
        .and('be.visible')

        cy.xpath('//a').should('have.length','5')
    })

    it('Explicit assertions', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "FirstNameTest LastNameTest"
        cy.get(".oxd-userdropdown-tab").then( (x) =>{

            let actName = x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)


            // TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName) 
        })
    })
})