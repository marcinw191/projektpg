import {browser, element, by, ProtractorExpectedConditions} from 'protractor';

export class Navbar {

  private EC: ProtractorExpectedConditions;

  constructor(ec: ProtractorExpectedConditions)
  {
    this.EC = ec;
  }

  zaloguj()
  {
    let login = element(by.id('login'));
    browser.wait(this.EC.elementToBeClickable(login), 50000);
    login.click();
    let inputUser = element(by.xpath('//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div[2]/span/div/div/div/div/div/div/div/div/div[4]/div[1]/div/input'));
    let inputPass = element(by.xpath('//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div[2]/span/div/div/div/div/div/div/div/div/div[4]/div[2]/div/input'));
    let submitButton = element(by.xpath('//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/button'));
    browser.wait(this.EC.presenceOf(inputUser), 50000);
    browser.wait(this.EC.presenceOf(inputPass), 50000);
    browser.wait(this.EC.presenceOf(submitButton), 50000);
    inputUser.sendKeys("testUser");
    inputPass.sendKeys("testPass");
    submitButton.click();
    browser.sleep(5000);
    let logout = element(by.id('logout'));
    browser.wait(this.EC.presenceOf(logout), 10000);
  }

  zamknijCookie()
  {
    let cookieDismiss = element(by.css('.dismiss'));
    browser.wait(this.EC.visibilityOf(cookieDismiss), 50000);
    cookieDismiss.click();
    browser.sleep(5000);
  }

}
