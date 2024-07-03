//Naming Convention used of this file name  is Pascal Case 
//Pascal Case: Starts with a uppercase letter and capitalizes the first letter of each subsequent
//------------Import File to visit Website----------

import 'cypress-xpath';
beforeEach(()=>{

    cy.visit('https://automationpanda.com/contact/')
        })

//----Test scenario-----------
describe('Automate Contact Us Form Page', () => {
    //------First Testcase---------- 
     //Writing Testcase for user enter Invalid data   
    it('Filling the Contact Us Form with Invalid Data',()=>{

        cy.xpath('//button[contains(text(),"Submit")]').click();
        
        cy.get('#menu-item-10 > a').click()

     //Import data from the Fixture Folder   
     cy.fixture('Data.json').then((Data) => {
    
      const invalidData = Data.InvalidData[0]; 
     
     //Getting the "Name" field by "ID" selector
     cy.get('#g3-name').type(invalidData.Name).wait(2000)

     //Getting the "Email" field by "ID" selector  
     cy.get('#g3-email').type(invalidData.Email).wait(2000)

     //Getting the "Message" field by "ID" selector  
     cy.get('#contact-form-comment-g3-message').type(invalidData.Message).wait(2000)

     //Getting and Clicking on "Send" button  
     cy.get('.wp-block-jetpack-button > .wp-block-button__link').click().wait(3000) 
      })
        
    })


 })
