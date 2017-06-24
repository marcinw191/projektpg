import { browser, ExpectedConditions } from 'protractor';
import { Navbar } from './navbar';


describe('Logowanie', () => {
  let navbar: Navbar;


  beforeEach(() => {
    navbar = new Navbar(ExpectedConditions);
  });

  it('powinno zalogować testowego użytkownika', () => {
    browser.waitForAngularEnabled(false);
    navbar.zamknijCookie();
    navbar.zaloguj();
  });

});

