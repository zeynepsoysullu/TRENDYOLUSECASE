// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


Given('Kullanıcı Trendyol web sitesine gider', () => {
    cy.visitTrendyol();
});
And('Cerezleri Kabul eder', () => {
    cy.acceptCookies();

});
When('Kullanıcı "Elektronik" olan bir ürünü arar', () => {
    cy.selectCategoryElectronic();
});
And('100 TL altında bir ürünü seçer', () => {
    cy.selectCardUnder100();
});
And('Kullanıcı seçilen ürünü sepete ekler', () => {
    cy.addToBasket();
});
And('Kullanıcı sepete gider', () => {
    cy.goToTheCart();
});
And('Kullanıcı "Kupon Kullan" butonuna tıklar', () => {
    cy.usedCouponButton();
});
And('Kullanıcı  giriş bilgileriyle oturum açar', () => {
    cy.login();
});
And('Kullanıcı "Kupon Kullan" butonuna tıklar', () => {
    cy.usedCouponButton();
});
And('Kullanıcı random kuponu girer ve uygular', () => {
    cy.couponValue();
});
Then('Kullanıcı kuponunu kullanamadıgını görür', () => {
    cy.ınvalidCouponCode();
});