export class HomePage {
    
    navigate() {
        cy.visit('/')
    }

    acceptCookies(){
        cy.get('#onetrust-button-group', { timeout: 5000 }).should('be.visible');
        cy.get('#onetrust-accept-btn-handler').click()
    }
}