class Helper{
navigateToHomepage(){
    cy.visit('/');
    cy.url().should('contain','codas.com');
 } 
 takeScreenshot(){
    cy.screenshot();
  }
}
export default Helper;