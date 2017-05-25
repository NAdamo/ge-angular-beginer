import { GeAngularDemoPage } from './app.po';

describe('ge-angular-demo App', () => {
  let page: GeAngularDemoPage;

  beforeEach(() => {
    page = new GeAngularDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
