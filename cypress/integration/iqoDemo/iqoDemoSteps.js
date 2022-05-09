import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import HomePage_PO from "../../support/pageObjects/HomePage_PO";
import Helper from "../../support/helper";
import IqoDemo_PO from "../../support/pageObjects/iqoDemo_PO";
import OilsIqo_PO from "../../support/pageObjects/OilsIqo_PO";

const helper = new Helper();
const homepage = new HomePage_PO();
const iqodemo = new IqoDemo_PO();
const oilsiqo = new OilsIqo_PO();

Given ('I am in the homepage', ()=>{
    helper.navigateToHomepage();
})
When ('I scroll down and click on CODAS IQO button', ()=>{
    homepage.scrollToClickCodasIqoButton();
})
Then ('Codas Iqo page is displayed', ()=>{
    iqodemo.navigateToIqoPage();
})
When ('I enter postcode M54TP', ()=>{
    oilsiqo.typePostCode();
})
And ('I click on Get Quote button', ()=>{
    oilsiqo.clickOnGetQuoteButton();
})
Then ('The delivery choice page is displayed', ()=>{
    oilsiqo.navigateToDeliveryChoicePage();
})
When ('I select {string} button', (deliveryOption)=>{
    oilsiqo.deliveryOption(deliveryOption);
})
Then ('Your details page is displayed', ()=>{
    oilsiqo.deliveryDetailsPage();    
})
And ('I take a screenshot of your details page', ()=>{
    helper.takeScreenshot();
})