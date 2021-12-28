/// <reference types="cypress"/>

import { HomePage } from "../page-objects/home-page"

describe('doodle tests', () => {

    const homePage = new HomePage()

    it('should open the create doodle page', () => {

        cy.visit('/')
        cy.get('.CreatePollMenu-createMenuLabel').click()
        cy.url().should('contain', '/create')
    })
})