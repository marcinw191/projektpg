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
    browser.wait(this.EC.visibilityOf(card), 5000);
    return element.all(by.css('.h-100'));
  }

  szukaj(fraza: string){
    this.wyswietlOgloszenia();
    let szukajInput = element(by.css('.znajdz-ogloszenie'));
    //browser.wait(this.EC.visibilityOf(szukajInput));
    let szukajButton = element(by.buttonText('SZUKAJ'));
    //browser.wait(this.EC.visibilityOf(szukajButton));
    szukajInput.sendKeys("");
    szukajInput.sendKeys(fraza);
    szukajButton.click();
    return this.wyswietlOgloszenia();
  }

}
