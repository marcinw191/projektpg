import {browser, element, by, ProtractorExpectedConditions,  ElementFinder} from 'protractor';
import { Navbar } from './navbar';


export class DodajOgloszeniePage {

  private EC: ProtractorExpectedConditions;
  public navbar: Navbar;
  private tytul: ElementFinder;
  private opis: ElementFinder;
  private cena: ElementFinder;
  private czasWykonania: ElementFinder;
  private telefon: ElementFinder;
  private ulica: ElementFinder;
  private ulica_numer: ElementFinder;
  private miasto: ElementFinder;
  private koniecLicytacji: ElementFinder;
  private dodajButton: ElementFinder;
  private potwierdzenieDodania: ElementFinder;


  constructor(ec: ProtractorExpectedConditions)
  {
    this.EC = ec;
    this.navbar = new Navbar(this.EC);
    this.tytul = element(by.id('tytul'));
    this.opis = element(by.id('opis'));
    this.cena = element(by.id('maxCena'));
    this.czasWykonania = element(by.id('czasWykonania'));
    this.telefon = element(by.id('telefon'));
    this.ulica = element(by.id('ulica'));
    this.ulica_numer = element(by.id('ulica_numer'));
    this.miasto = element(by.id('miasto'));
    this.koniecLicytacji = element(by.id('koniecLicytacji'));
    this.dodajButton = element(by.id('dodajOgloszenie'));
    this.potwierdzenieDodania = element(by.css('.alert-success'));
  }

  navigateTo() {
    browser.get('/dodaj_ogloszenie');
  }

  wyswietlFormularz()
  {
    browser.wait(this.EC.presenceOf(this.tytul), 50000);
    browser.wait(this.EC.presenceOf(this.opis), 50000);
    browser.wait(this.EC.presenceOf(this.cena), 50000);
    browser.wait(this.EC.presenceOf(this.czasWykonania), 50000);
    browser.wait(this.EC.presenceOf(this.telefon), 50000);
    browser.wait(this.EC.presenceOf(this.ulica), 50000);
    browser.wait(this.EC.presenceOf(this.ulica_numer), 50000);
    browser.wait(this.EC.presenceOf(this.miasto), 50000);
    browser.wait(this.EC.presenceOf(this.koniecLicytacji), 50000);
  }

  dodajOgloszenie(
    tytul: string,
    opis: string,
    cena: string,
    czas: string,
    telefon: string,
    ulica: string,
    numer: string,
    miasto: string,
    zakonczenie: string)
  {
    browser.wait(this.EC.presenceOf(this.tytul), 50000);
    browser.wait(this.EC.presenceOf(this.dodajButton), 50000);
    this.tytul.sendKeys(tytul);
    this.opis.sendKeys(opis);
    this.cena.sendKeys(cena);
    this.czasWykonania.sendKeys(czas);
    this.telefon.sendKeys(telefon);
    this.ulica.sendKeys(ulica);
    this.ulica_numer.sendKeys(numer);
    this.miasto.sendKeys(miasto);
    this.koniecLicytacji.sendKeys(zakonczenie);

    this.dodajButton.click();
    browser.wait(this.EC.visibilityOf(this.potwierdzenieDodania), 50000);
  }

}
