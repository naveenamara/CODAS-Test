import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import HomePage_PO from "../../support/pageObjects/HomePage_PO";
import Helper from "../../support/helper";
import News_PO from "../../support/pageObjects/News_PO";

const helper = new Helper();
const homepage = new HomePage_PO();
const newspage = new News_PO();

Given('I am in the homepage', ()=>{
    helper.navigateToHomepage();
})
When('I click on News tab', ()=>{
   homepage.clickOnNewsTab(); 
})
Then('News page is displayed', ()=>{
    homepage.navigateToNewsPage();
})
And('I can see March news article', ()=>{
    newspage.verifyMarchDate();
})
When('I click on Read More button of March news article', ()=>{
    newspage.clickOnReadMore();
})
Then('The article is displayed', ()=>{
    newspage.verifyMarchArticle();
})
And('I take a screenshot of the article', ()=>{
    helper.takeScreenshot();
})