import {browser, element, by, ProtractorExpectedConditions} from 'protractor';
import { Navbar } from './navbar';

export class OgloszeniePage {

  private EC: ProtractorExpectedConditions;
  public navbar: Navbar;

  constructor(ec: ProtractorExpectedConditions)
  {
    this.EC = ec;
    this.navbar = new Navbar(this.EC);
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
}
