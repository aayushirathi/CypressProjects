describe("Web Table",()=>{
    beforeEach("Visit Site",()=>{
        cy.visit("https://practice.expandtesting.com/dynamic-pagination-table")
    })

    it("Check number of Rows & Columns",()=>{
        cy.get("#example>tbody>tr").should("have.length","3")
        cy.get("#example>thead>tr>th").should("have.length",6)
    })

    it("Check cell data from specific row & column",()=>{
        cy.get("#demo>tr:nth-child(2)>td:nth-child(4)")
        .contains("Florida")
    })

    it("Reading all the rows & columns from the first page",()=>{
        cy.get("#example>tbody>tr")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })

    it.only("Pagination",()=>{
        // cy.get("#example_info").then((e)=>{
        //     let mytext = e.text()
        //     let text = mytext.substring(mytext.indexOf("to")+1,mytext.indexOf("entries")-1)
        //     cy.log(text)
        // })

        let totalPages = 4
        for(let p=2;p<=totalPages+1;p++){
            if (totalPages>1){
                cy.log("Active page is : "+p)
                cy.get("#example_paginate>ul>li:nth-child("+p+")")
                cy.wait(3000)

                cy.get("#example>tbody>tr")
                .each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td:nth-child(6)").then((e)=>{
                            cy.log(e.text())
                        })
                    })
                })
            }
        }
    })
})