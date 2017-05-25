import { browser, ExpectedConditions } from 'protractor';
import { GaleriaOgloszenPage } from './galeria-ogloszen-page';


describe('GaleriaOgloszen', () => {
  let galeriaOgloszenPage: GaleriaOgloszenPage;


  beforeEach(() => {
    galeriaOgloszenPage = new GaleriaOgloszenPage(ExpectedConditions);
  });

  it('powinno wyswietlic strone główną / galerie ogłoszeń', () => {
    browser.waitForAngularEnabled(false);
    galeriaOgloszenPage.navigateTo();
    expect(galeriaOgloszenPage.pobierzNaglowekText()).toEqual('Kaskada remontuj za mniej');
  });

  it('powinno wyświetlić wszystkie ogłoszenia', () => {
    browser.waitForAngularEnabled(false);
    galeriaOgloszenPage.navigateTo();
    var cards = galeriaOgloszenPage.wyswietlOgloszenia();
    expect(cards.count()).toEqual(8);
  });

  it('powinno wyszukać 5 ogłoszeń po frazie', () => {
    browser.waitForAngularEnabled(false);
    galeriaOgloszenPage.navigateTo();
    var cards = galeriaOgloszenPage.szukaj("remont");
    expect(cards.count()).toEqual(5);
  });

//  it('powinno wyszukać 0 ogłoszeń po frazie', () => {
//    browser.waitForAngularEnabled(false);
//    page.navigateTo();
//    var cards = page.szukaj("oksymoron");
//    expect(cards.count()).toEqual(0);
//  });

});
