import {browser, element, by, ProtractorExpectedConditions} from 'protractor';

export class GaleriaOgloszenPage {

  private EC: ProtractorExpectedConditions;

  constructor(ec: ProtractorExpectedConditions)
  {
    this.EC = ec;
  }

  navigateTo() {
    return browser.get('/');
  }

  pobierzNaglowekText() {
    return element(by.css('.navbar-brand')).getText();
  }

  wyswietlOgloszenia() {
    let card = element(by.css('.h-100'));
    browser.wait(this.EC.presenceOf(card), 50000);
    return element.all(by.css('.h-100'));
  }

  szukaj(fraza: string){
    let szukajInput = element(by.css('.znajdz-ogloszenie'));
    browser.wait(this.EC.presenceOf(szukajInput), 50000);
    let szukajButton = element(by.buttonText('SZUKAJ'));
    browser.wait(this.EC.presenceOf(szukajButton), 50000);
    szukajInput.sendKeys(fraza);
    szukajButton.click();
    return this.wyswietlOgloszenia();
  }

}
