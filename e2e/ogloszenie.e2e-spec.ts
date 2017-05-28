import { browser, ExpectedConditions } from 'protractor';
import { OgloszeniePage } from './ogloszenie-page';

describe('Ogloszenie', () => {
  let page: OgloszeniePage;

  beforeEach(() => {
    page = new OgloszeniePage(ExpectedConditions);
  });
  /*
  it('powinno wyświetlić ogloszenie nr 1', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    let ogloszenie = page.wyswietlOgloszenie();
    expect(ogloszenie).toEqual("Łazienka do kapitalnego remontu");

    expect(ogloszenie.tytul).toEqual("Łazienka do kapitalnego remontu");
    expect(ogloszenie.lokalizacja).toEqual(" Gdańsk, Bzowa 12");
    expect(ogloszenie.dataPublikacji).toEqual(" Data publikacji: 2017-04-20 19:45:57");
    expect(ogloszenie.maxCena).toEqual("2000 zł");
    expect(ogloszenie.maxCzas).toEqual("5 dni");
    expect(ogloszenie.zlecajacy).toEqual("Bartłomiej Kornowski");

  });
  */
});
