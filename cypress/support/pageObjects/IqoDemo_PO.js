class IqoDemo_PO{    
    navigateToIqoPage(){
        cy.url().should('contain','codas-iqo')
    }
}
export default IqoDemo_PO;