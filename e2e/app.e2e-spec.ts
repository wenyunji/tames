import { TamesPage } from './app.po';

describe('tames App', () => {
  let page: TamesPage;

  beforeEach(() => {
    page = new TamesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
