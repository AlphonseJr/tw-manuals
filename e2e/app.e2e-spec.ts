import { TwManualsPage } from './app.po';

describe('tw-manuals App', () => {
  let page: TwManualsPage;

  beforeEach(() => {
    page = new TwManualsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
