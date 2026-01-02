/// <reference types = "cypress" />

import Login from '../PageObjects/LoginPage.js'

describe('mytest', ()=> {
    

    it("test",()=>{
        let ln = new Login()

        cy.fixture("orangehrm.json").then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            ln.setUsername(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
    })


})