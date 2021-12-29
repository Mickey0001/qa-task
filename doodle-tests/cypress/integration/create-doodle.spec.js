/// <reference types="cypress"/>

import { HomePage } from "../page-objects/home-page"
import selectors from "../support/selectors"

describe('doodle tests', () => {

    const homePage = new HomePage()

    before(() => {
        homePage.navigate()
        homePage.acceptCookies()
    })

    it('should navigate to create doodle page', () => {
        cy.get(selectors.createDoodleButton).click()
        cy.url().should('contain', '/create')
    })

    it('should require a title to continue', () => {
        cy.get(selectors.doodleStepOneContinueButton).should('be.disabled')
    })

    it('should navigate to doodle options page', () => {
        cy.get(selectors.doodleStepOneTitleInput).type('Doodle Title ' + Math.floor(Math.random() * 100) + 1)
        cy.get(selectors.doodleStepOneContinueButton).click()
        cy.url().should('contain', '/create/options')
    })

    it('should select an option to continue', () => {
        cy.get(selectors.doodleStepTwoDateSelection).click()
        cy.get(selectors.doodleStepTwoContinueButton).click()
        cy.url().should('contain', '/create/settings')
    }) 

    it('should select poll settings', () => {
        cy.get(selectors.doodleStepThreeSecondOption).click()
        cy.get(selectors.doodleStepThreeSecondOptionVotes).clear().type(2)
        cy.get(selectors.doodleStepThreeThrirdOption).click()
        cy.get(selectors.doodleStepThreeFourthOption).click()
        cy.get(selectors.doodleStepThreeContinueButton).click()
        cy.url().should('contain', '/create/initiator')
    })

    it('should finish the poll', () => {
        cy.get(selectors.doodleStepFourName).type('Hi, my name is, chk-chk-chk Slim Shaddy')
        cy.get(selectors.doodleStepFourEmail).type('mirza.test@getnada.com')
        cy.get(selectors.doodleStepFourFinishButton).click()
        cy.url().should('contain', '/poll/')
    })
})