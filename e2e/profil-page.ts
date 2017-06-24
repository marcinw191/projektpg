import {browser, element, by, ProtractorExpectedConditions, ElementFinder} from 'protractor';

export class ProfilPage {

  private EC: ProtractorExpectedConditions;
  private nazwa: ElementFinder;
  private email: ElementFinder;
  private telefon: ElementFinder;
  private typ: ElementFinder;
  private adres: ElementFinder;
  private miasto: ElementFinder;
  private edytujButton: ElementFinder;

  constructor(ec: ProtractorExpectedConditions)
  {
    this.EC = ec;
    this.nazwa = element(by.id('nazwa'));
    this.email = element(by.id('email'));
    this.telefon = element(by.id('telefon'));
    this.typ = element(by.id('typ'));
    this.adres = element(by.id('adres'));
    this.miasto = element(by.id('miasto'));
    this.edytujButton = element(by.buttonText('Edytuj dane'));
  }

  navigateTo() {
    return browser.get('/profil');
  }

  wyswietlProfil() {

    browser.wait(this.EC.presenceOf(this.nazwa), 50000);
    browser.wait(this.EC.presenceOf(this.email), 50000);
    browser.wait(this.EC.presenceOf(this.typ), 50000);

    return {
      nazwa: this.nazwa.getText(),
      email: this.email.getText(),
      typ: this.typ.getText(),
    };
  }

  zmienMiasto(miasto: string) {
    browser.wait(this.EC.presenceOf(this.edytujButton), 50000);
    this.edytujButton.click();
    let miejscowoscInput = element(by.id('miejscowosc'));
    browser.wait(this.EC.presenceOf(miejscowoscInput), 50000);
    miejscowoscInput.sendKeys(miasto);
    let zapisButton = element(by.buttonText('Zapisz zmiany'));
    zapisButton.click();
    let potwierdzenie = element(by.xpath('/html/body/dialog-holder/dialog-wrapper/div/dialog-built-in/div/div/div[1]/div[2]'));
    browser.wait(this.EC.presenceOf(potwierdzenie), 50000);
    let potwierdzenieButton = element(by.xpath('/html/body/dialog-holder/dialog-wrapper/div/dialog-built-in/div/div/div[2]/button[2]'));
    potwierdzenieButton.click();
    browser.sleep(2000);
    let powrotButton = element(by.buttonText('Powrót'));
    powrotButton.click();
    browser.wait(this.EC.presenceOf(this.miasto), 50000);
    return this.miasto.getText();
  }

  zmienTelefon(telefon: string) {
    browser.wait(this.EC.presenceOf(this.edytujButton), 50000);
    this.edytujButton.click();
    let telefonInput = element(by.id('telefon'));
    browser.wait(this.EC.presenceOf(telefonInput), 50000);
    telefonInput.sendKeys(telefon);
    let zapisButton = element(by.buttonText('Zapisz zmiany'));
    zapisButton.click();
    let potwierdzenie = element(by.xpath('/html/body/dialog-holder/dialog-wrapper/div/dialog-built-in/div/div/div[1]/div[2]'));
    browser.wait(this.EC.presenceOf(potwierdzenie), 50000);
    let potwierdzenieButton = element(by.xpath('/html/body/dialog-holder/dialog-wrapper/div/dialog-built-in/div/div/div[2]/button[2]'));
    potwierdzenieButton.click();
    browser.sleep(2000);
    let powrotButton = element(by.buttonText('Powrót'));
    powrotButton.click();
    browser.wait(this.EC.presenceOf(this.telefon), 50000);
    return this.telefon.getText();
  }

}
