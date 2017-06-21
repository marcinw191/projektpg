import { browser, ExpectedConditions } from 'protractor';
import { OgloszeniePage } from './ogloszenie-page';

describe('Ogloszenie', () => {
  let ogloszeniePage: OgloszeniePage;

  beforeEach(() => {
    ogloszeniePage = new OgloszeniePage(ExpectedConditions);
  });

  it('powinno wyświetlić wszystkie parametry ogloszenia nr 1', () => {
    browser.waitForAngularEnabled(false);
    ogloszeniePage.navigateTo(1);
    let ogloszenie = ogloszeniePage.wyswietlOgloszenie();

    expect(ogloszenie.tytul).toEqual("Łazienka do kapitalnego remontu");
    expect(ogloszenie.lokalizacja).toEqual("Gdańsk, Bzowa 12");
    expect(ogloszenie.dataPublikacji).toEqual("Data publikacji: 2017-04-20 19:45:57");
    expect(ogloszenie.maxCena).toEqual("2000 zł");
    expect(ogloszenie.maxCzas).toEqual("5 dni");
    expect(ogloszenie.zlecajacy).toEqual("Bartłomiej Kornowski");

  });

  it('powinno wyświetlić wszystkie oferty złożone dla ogłoszenia nr 1', () => {
    browser.waitForAngularEnabled(false);
    ogloszeniePage.navigateTo(1);

    let oferty = ogloszeniePage.wyswietlOferty();
    expect(oferty.count()).toEqual(5);

  });

  it('powinno zalogować i wyświetlić wszystkie oferty złożone dla ogłoszenia nr 1', () => {
    browser.waitForAngularEnabled(false);
    ogloszeniePage.navbar.zamknijCookie();
    ogloszeniePage.navbar.zalogujWykonawce();
    ogloszeniePage.navigateTo(1);

    let oferty = ogloszeniePage.wyswietlOferty();
    expect(oferty.count()).toEqual(5);

  });


});
