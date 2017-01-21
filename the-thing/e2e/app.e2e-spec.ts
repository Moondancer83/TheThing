import { TheThingPage } from './app.po';

describe('the-thing App', function() {
  let page: TheThingPage;

  beforeEach(() => {
    page = new TheThingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
