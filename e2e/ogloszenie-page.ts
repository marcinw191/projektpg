import {browser, element, by, ProtractorExpectedConditions} from 'protractor';

export class OgloszeniePage {

  private EC: ProtractorExpectedConditions;

  constructor(ec: ProtractorExpectedConditions)
  {
    this.EC = ec;
  }

  navigateTo(numer: number) {
    return browser.get('/ogloszenie/' + numer);
  }

  wyswietlOgloszenie() {
    let tytul = element(by.id('tytul'));
    let lokalizacja = element(by.id('lokalizacja'));
    let dataPublikacji = element(by.id('dataPublikacji'));
    let maxCena = element(by.id('maxCena'));
    let maxCzas = element(by.id('maxCzas'));
    let zlecajacy = element(by.id('zlecajacy'));

    browser.wait(this.EC.presenceOf(tytul), 50000);
    browser.wait(this.EC.presenceOf(lokalizacja), 50000);
    browser.wait(this.EC.presenceOf(dataPublikacji), 50000);
    browser.wait(this.EC.presenceOf(maxCena), 50000);
    browser.wait(this.EC.presenceOf(maxCzas), 50000);
    browser.wait(this.EC.presenceOf(zlecajacy), 50000);

    return {
      tytul: tytul.getText(),
      lokalizacja: lokalizacja.getText(),
      dataPublikacji: dataPublikacji.getText(),
      maxCena: maxCena.getText(),
      maxCzas: maxCzas.getText(),
      zlecajacy: zlecajacy.getText()
    };
  }

  wyswietlOferty() {
    let oferty = element(by.css('.oferta'));
    browser.wait(this.EC.presenceOf(oferty), 50000);
    return element.all(by.css('.oferta'));
  }

  dodajOferte(cena: string, telefon: string, wiadomosc: string) {
    let inputCena = element(by.id('cena'));
    let inputTelefon = element(by.id('telefon'));
    let inputWiadomosc = element(by.id('wiadomosc'));
    let dodajButton = element(by.css('.dodaj'));

    browser.wait(this.EC.presenceOf(inputCena), 50000);
    browser.wait(this.EC.presenceOf(inputTelefon), 50000);
    browser.wait(this.EC.presenceOf(inputWiadomosc), 50000);
    browser.wait(this.EC.presenceOf(dodajButton), 50000);

    inputCena.sendKeys(cena);
    inputTelefon.sendKeys(telefon);
    inputWiadomosc.sendKeys(wiadomosc);
    browser.sleep(1000);
    dodajButton.click();

    let potwierdzenie = element(by.xpath('/html/body/app-root/div/div/app-ogloszenie/div/div[2]/div[1]/app-oferta-dodaj/app-alert/alert/div/p'));
    browser.wait(this.EC.presenceOf(potwierdzenie), 50000);
    return potwierdzenie.getText();

  }
}
