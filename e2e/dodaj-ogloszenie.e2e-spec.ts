import { browser, ExpectedConditions } from 'protractor';
import { DodajOgloszeniePage } from './dodaj-ogloszenie-page';


describe('DodajOgloszenie', () => {
  let dodajOgloszeniePage: DodajOgloszeniePage;


  beforeEach(() => {
    dodajOgloszeniePage = new DodajOgloszeniePage(ExpectedConditions);
  });

  it('powinno wyswietlić wszystkie pola formularza', () => {
    browser.waitForAngularEnabled(false);
    dodajOgloszeniePage.navigateTo();
    dodajOgloszeniePage.wyswietlFormularz()
  });

  it('powinno dodac ogloszenie', () => {
    browser.waitForAngularEnabled(false);
    dodajOgloszeniePage.navigateTo();
    dodajOgloszeniePage.dodajOgloszenie(
      "Ogłoszenie testowe",
      "Opis ogłoszenia testowego",
      "2000",
      "10",
      "506409123",
      "Lęborska",
      "23",
      "Gdańsk",
      "06/07/2017"
    );
  });

});

