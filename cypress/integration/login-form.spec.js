describe('Input form', () => {
    it('focuses input on load', () => {
        cy.visit('http://localhost:8080/')

        cy.focused().should('have.id', 'username')
    })
})
//FOCUSED - ASSERT
//expected <input#username.input-text_border.input-text_text.input-text_theme> to have id username