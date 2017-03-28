import { KaskadaSerwisUslugowyPage } from './app.po';

describe('kaskada-serwis-uslugowy App', () => {
  let page: KaskadaSerwisUslugowyPage;

  beforeEach(() => {
    page = new KaskadaSerwisUslugowyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
