import { browser, ExpectedConditions } from 'protractor';
import { ProfilPage } from './profil-page';

describe('ProfilUzytkownika', () => {
  let profilPage: ProfilPage;

  beforeEach(() => {
    profilPage = new ProfilPage(ExpectedConditions);
  });

  it('powinno wyświetlić poprawne dane profilu uzytkownika', () => {
    browser.waitForAngularEnabled(false);
    profilPage.navigateTo();
    let profil = profilPage.wyswietlProfil();

    expect(profil.nazwa).toEqual("test@test.com");
    expect(profil.email).toEqual("test@test.com");
    expect(profil.typ).toEqual("administrator");

  });

  it('powinno wyedytować i zapisać profil użytkownika', () => {
    browser.waitForAngularEnabled(false);
    profilPage.navigateTo();

    let miasto = profilPage.zmienMiasto("Gdańsk");
    expect(miasto).toEqual("Gdańsk");

    let telefon = profilPage.zmienTelefon("505412123");
    expect(telefon).toEqual("505412123");

  });

});
