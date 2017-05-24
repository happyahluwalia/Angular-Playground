import { NGPlaygroundPage } from './app.po';

describe('ng-playground App', () => {
  let page: NGPlaygroundPage;

  beforeEach(() => {
    page = new NGPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
