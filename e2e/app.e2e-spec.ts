import { PastovisionPage } from './app.po';

describe('pastovision App', function() {
  let page: PastovisionPage;

  beforeEach(() => {
    page = new PastovisionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
