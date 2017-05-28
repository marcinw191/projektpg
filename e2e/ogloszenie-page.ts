import {browser, element, by, ProtractorExpectedConditions} from 'protractor';

export class OgloszeniePage {

  private EC: ProtractorExpectedConditions;

  constructor(ec: ProtractorExpectedConditions)
  {
    this.EC = ec;
  }

  navigateTo() {
    return browser.get('/ogloszenie/1');
  }

  wyswietlOgloszenie() {
    let tytul = element(by.css('.tytul-oferta'));
    browser.wait(this.EC.visibilityOf(tytul), 50000);
    return element(by.css('.tytul-oferta')).getText();
    /*
    let lokalizacja = element.all(by.css('.lokalizcja'))[0].getText();
    let dataPublikacji = element.all(by.css('.lokalizcja'))[1].getText();
    let maxCena = element.all(by.css('.wartosc'))[0].getText();
    let maxCzas = element.all(by.css('.wartosc'))[1].getText();
    let zlecajacy = element.all(by.css('zlecajacy'))[0].getText();

    return {
      tytul: tytul,
      lokalizacja: lokalizacja,
      dataPublikacji: dataPublikacji,
      maxCena: maxCena,
      maxCzas: maxCzas,
      zlecajacy: zlecajacy
    };
  */
  }
}
