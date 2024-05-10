Cypress.Commands.add('configureUncaughtExceptionHandling', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Hatayı konsola yazdır
        console.error('Uncaught Exception:', err.message)
            // Cypress'in testi başarısız yapmasını engelleme
        return false
    })
})

export const getRandomNumber = (min, max) => ~~(Math.random() * (max - min) + min);
Cypress.Commands.add('visitTrendyol', () => {
    cy.visit('https://www.trendyol.com/');

})
Cypress.Commands.add('acceptCookies', () => {
    cy.get('#onetrust-accept-btn-handler').click(); // Çerezleri kabul etme düğmesine tıkla (varsa)
    cy.wait(2000);

})

Cypress.Commands.add('selectCategory', () => {
    // Kategori seçimini gerçekleştirir
    const categoryNumber = '.main-nav > .tab-link > .category-header'; // ana kategoriler
    const categoryContainer = '.sub-nav > .sub-nav-center'; // açılan pencere
    const subCategory = '.category-box > .sub-category-header'; // açılan penceredeki alt başlıklar

    const excludedCategories = ['Çok SatanlarYeni', 'Flaş ÜrünlerYeni', 'Elektronik'];

    return cy.get(categoryNumber).should('exist').then($categories => {
        const numCategories = $categories.length;
        cy.log(numCategories);
        const randomIndex = getRandomNumber(0, numCategories);
        cy.log(randomIndex);
        const randomCategory = $categories.eq(randomIndex);
        const categoryText = randomCategory.text().trim();

        if (!excludedCategories.includes(categoryText)) {
            cy.get(categoryNumber).eq(randomIndex).trigger('mouseover').then(() => {
                cy.get(categoryContainer).eq(randomIndex).find(subCategory).first().click({ force: true }).then(() => {
                    cy.log(`Seçilen kategori: ${categoryText}`);
                });
            });
        } else {
            cy.log(`Seçilen kategori (${categoryText}) excludedCategories listesinde olduğu için tekrar denenecek.`);
            cy.selectCategory(); // Yeniden kategori seç
        }
    });
})
Cypress.Commands.add('selectCategoryElectronic', () => {
    const categoryNumber = '.main-nav > .tab-link > .category-header'; // ana kategoriler
    const categoryContainer = '.sub-nav > .sub-nav-center'; // açılan pencere
    const subCategory = '.category-box > .sub-category-header'; // açılan penceredeki alt başlıklar
    cy.wait(2000);
    cy.get('#container').then(($body) => //arrow function 
        {
            if ($body.find(".onboarding-wrapper").length > 0 || $body.find(".campaign-pointer").length > 0) {
                cy.get('.shadow').click();
            }
            const index = 7;
            // Elektronik kategorisinin üzerine gel
            cy.get(categoryNumber).eq(index).trigger('mouseover', { force: true }).then(() => {
                // Elektronik kategorisinin alt kategorilerinden birine tıkla
                cy.get(categoryContainer).eq(index).find(subCategory).first().click({ force: true });
            });
        })


});

Cypress.Commands.add('selectCard', () => {
    return cy.get('.p-card-chldrn-cntnr .prc-box-dscntd').each($card => {
        const priceText = $card.text();
        const price = parseFloat(priceText.replace('TL', '').replace(',', '.'));
        if (price > 100) {
            cy.log(price);
            const productLink = $card.closest('a').attr('href');
            cy.visit('https://www.trendyol.com/' + productLink);
            return false; // döngüden cık 
        }
    });
});
Cypress.Commands.add('selectCardUnder100', () => {
    cy.wait(2000);
    cy.get('.select-w').click({ force: true });
    cy.get('.search-dropdown > :nth-child(2)').click({ force: true });

    cy.wait(2000);
    return cy.get('.p-card-chldrn-cntnr .prc-box-dscntd').each($card => {
        const priceText = $card.text();
        const price = parseFloat(priceText.replace('TL', '').replace(',', '.'));
        if (price < 100) {
            cy.log(price);
            const productLink = $card.closest('a').attr('href');
            cy.visit('https://www.trendyol.com/' + productLink);
            return false; // döngüden cık 
        }
    });
});
Cypress.Commands.add('addToBasket', () => {
    cy.get('.product-button-container > .add-to-basket').click({ force: true });

})
Cypress.Commands.add('goToTheCart', () => {
    cy.wait(2000);
    cy.get('.basket-preview > .link').click({ force: true });
})
Cypress.Commands.add('usedCouponButton', () => {
    cy.get('.add-coupon-toggle-container').click({ force: true });

})
Cypress.Commands.add('login', () => {
    cy.url().should('include', 'https://www.trendyol.com/giris');
    cy.get('.q-primary > span').should('contain', 'Giriş Yap').and('be.visible');

    // const fakeEmail = Cypress.env('MY_EMAIL');
    // const fakePassword = Cypress.env('MY_PASSWORD');
    const fakeEmail = 'syzeynep14@gmail.com';
    const fakePassword = 'sy123.';

    cy.get('#login-email').type(fakeEmail);
    cy.get('#login-password-input').type(fakePassword);
    cy.wait(2000);
    cy.get('.q-primary > span').click({ force: true });
    cy.wait(4000);
})
Cypress.Commands.add('couponValue', () => {

    const couponValue = "zey123";
    cy.get('.add-coupon-input').type(couponValue);
    cy.wait(2000);
    cy.get('.add-coupon-button').click();

})
Cypress.Commands.add('ınvalidCouponCode', () => {
    cy.get('.coupon-error-description').should('contain', 'Üzgünüz böyle bir kod yok');
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })