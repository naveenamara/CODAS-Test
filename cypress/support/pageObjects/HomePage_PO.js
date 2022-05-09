class HomePage_PO{
    clickOnNewsTab(){
        cy.get('.menu-text').contains('News').click({force:true});        
    }
    navigateToNewsPage(){
        cy.url().should('contain','news');
    }
    scrollToClickCodasIqoButton(){
        cy.get('.fontawesome-icon.fa-tablet-alt.fas.circle-yes').click();
    }
}
export default HomePage_PO;