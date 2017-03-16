import { HothoursPage } from './app.po';

describe('hothours App', () => {
  let page: HothoursPage;

  beforeEach(() => {
    page = new HothoursPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
