describe('Input form', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    //test 1
    it('focuses input on load', () => {
        // cy.visit('http://localhost:8080/')

        cy.focused().should('have.id', 'username')
    })

    //test 2
    it('accepts input', () => {
        const username = "Ginger"
        // cy.visit('http://localhost:8080/')

        cy.get('#username')
            .type('Ginger')
            .should('have.value', 'Ginger')
    })
})

//FOCUSED - ASSERT
//expected <input#username.input-text_border.input-text_text.input-text_theme> to have id username

//GET -TYPE -ASSERT
//.only ensures that the test runs by itself. Feedback loop stays fast
//expected <input#username.input-text_border.input-text_text.input-text_theme> to have value Ginger

//Controlled input
    //instead of standard input bahavior, 
    //the application code will handle changes to the input
    //and then reset its value
    //so its possible that our app could alter the input as its typed
    //we want the controlled input to reflect exactly what the user types
        // this.state = {
        //     username: ""
        // }