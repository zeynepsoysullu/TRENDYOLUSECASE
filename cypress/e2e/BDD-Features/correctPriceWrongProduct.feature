Feature: Sepete Ürün Ekleme ve Kupon Kullanma
Scenario: 100 üzernde elektronik Olmayan Ürünü Sepete Ekle ve Kupon Kullan
    Given Kullanıcı Trendyol web sitesine gider
    And Cerezleri Kabul eder
    When Kullanıcı "Elektronik" olmayan bir ürünü arar
    And 100 TL üzerinde bir ürünü seçer
    And Kullanıcı seçilen ürünü sepete ekler
    And Kullanıcı sepete gider
    And Kullanıcı "Kupon Kullan" butonuna tıklar
    And Kullanıcı  giriş bilgileriyle oturum açar
    And Kullanıcı "Kupon Kullan" butonuna tıklar
    And Kullanıcı random kuponu girer ve uygular
    Then Kullanıcı kuponunu kulanamaz fail olur