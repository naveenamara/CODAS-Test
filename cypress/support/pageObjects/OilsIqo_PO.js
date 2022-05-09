class OilsIqo_PO{
navigateToOilsIqoPage(){
    cy.url().should('contain','codas-iqo');
 }
 typePostCode(){
    cy.get('[rel="noopener noreferrer"]').invoke('removeAttr', 'target').click();
    cy.url().should('contain', 'cds.fuels.app');
    cy.get('[id=Postcode]')
      .wait(1000)
      .type('M54TP'); 
 }
 clickOnGetQuoteButton(){
    cy.get('#btnGetQuote').click();
 }
 navigateToDeliveryChoicePage(){
    cy.get('#step2').should('contain','Please make the best delivery choice for you');
}
 deliveryOption(deliveryOption){   
      if(!cy.contains(deliveryOption))
      {
         throw new Error(`${deliveryOption} not available, please choose another delivery option`)        
      }else{
      cy.get('[class="clickable"]').contains(deliveryOption).click(); 
      }   
 }
 deliveryDetailsPage(){
     cy.get('#frm-step3').should('contain','Your details');
 } 
}
export default OilsIqo_PO;