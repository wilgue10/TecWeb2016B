import { HeroAPPPage } from './app.po';

describe('hero-app App', () => {
  let page: HeroAPPPage;

  beforeEach(() => {
    page = new HeroAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
