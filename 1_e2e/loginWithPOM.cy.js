/// <reference types = "Cypress" >/

import Login from "../PageObjects/LoginPage.js"

import Login2 from "../PageObjects/LoginPage2.js"

describe("test suite",()=>{
    

    it("Login using POM",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln = new Login()

        ln.setUsername("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })


    it("Login Page 2",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln2 = new Login2()

        ln2.setUsername("Admin")
        ln2.setPassword("admin123")
        ln2.clickSubmit()
        ln2.verifyLogin()
    })

    // Getting data from fixture
    it.only("Getting data from fixture",()=>{
        cy.fixture("orangehrm.json").then((data)=>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln2 = new Login2()

        ln2.setUsername(data.username)
        ln2.setPassword(data.password)
        ln2.clickSubmit()
        ln2.verifyLogin()
        })
    })


})