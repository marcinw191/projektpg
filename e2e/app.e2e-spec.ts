import { browser, element, by, ExpectedConditions } from 'protractor';
import { GaleriaOgloszenPage } from './app.po';

describe('kaskada-serwis-uslugowy App', () => {
  let page: GaleriaOgloszenPage;

  beforeEach(() => {
    page = new GaleriaOgloszenPage(ExpectedConditions);
  });

  it('powinno wyswietlic strone główną / galerie ogłoszeń', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    expect(page.pobierzNaglowekText()).toEqual('Kaskada remontuj za mniej');
  });

  it('powinno wyświetlić wszystkie ogłoszenia', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    var cards = page.wyswietlOgloszenia();
    expect(cards.count()).toEqual(8);
  });

  it('powinno wyszukać 5 ogłoszeń po frazie', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    var cards = page.szukaj("remont");
    expect(cards.count()).toEqual(5);
  });
/*
  it('powinno wyszukać 0 ogłoszeń po frazie', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    var cards = page.szukaj("oksymoron");
    expect(cards.count()).toEqual(0);
  });
*/
});
