class News_PO{
   verifyMarchDate(){
     cy.get('.fusion-single-line-meta').eq(1).should('contain','March 30th, 2022');
   }
   clickOnReadMore(){
     cy.get('.fusion-alignright').eq(2).click();
   }
   verifyMarchArticle(){
     cy.url().should('contain','2022/03/30')     
   }   
}
export default News_PO;