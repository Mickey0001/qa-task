import selectors from "../support/selectors";

export class HomePage {
    
    navigate() {
        cy.visit('/')
    }

    acceptCookies(){
        cy.get(selectors.cookieButtonGroup , { timeout: 5000 }).should('be.visible');
        cy.get(selectors.cookieAccepptButton).click()
    }
}