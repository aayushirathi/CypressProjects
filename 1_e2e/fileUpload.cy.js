import "cypress-file-upload"

describe("File Upload",()=>{
    it("Single File Upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("test1.pdf")
        cy.get("#file-submit").click()

        cy.wait(5000)

        cy.get("div[class='example'] h3").should("have.text","File Uploaded!")
    })


    it("File Upload - Rename",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath : "test1.pdf", fileName : "myFile.pdf"})
        cy.get("#file-submit").click()

        cy.wait(5000)

        cy.get("div[class='example'] h3").should("have.text","File Uploaded!")
    })


    it("File Upload - Drag & Drop",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("test1.pdf",{subjectType : "drag-n-drop"})

        cy.wait(5000)

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        // .contains("test1.pdf")
        .should("have.text","test1.pdf")
    })


    it("Multiple File Uploads",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["test1.pdf","test2.pdf"])

        cy.wait(5000)

        cy.get("ul[id='fileList'] li").should("not.have.text","No Files Selected")
    })


    it.only("File Upload - Shadow DOM",()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input" , {includeShadowDom : true}).attachFile("test1.pdf")

        cy.wait(5000)

        cy.get(".smart-item-name",{includeShadowDom:true}).contains("test1.pdf")
    })
})