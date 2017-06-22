import {browser, element, by, ProtractorExpectedConditions} from 'protractor';
import { Navbar } from './navbar';


export class DodajOgloszeniePage {

  private EC: ProtractorExpectedConditions;
  public navbar: Navbar;

  constructor(ec: ProtractorExpectedConditions)
  {
    this.EC = ec;
    this.navbar = new Navbar(this.EC);
  }

  navigateTo() {
    return browser.get('/dodaj_ogloszenie');
  }


}
