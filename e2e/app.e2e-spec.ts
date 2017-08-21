import { NbbfAngularPage } from './app.po';

describe('nbbf-angular App', () => {
  let page: NbbfAngularPage;

  beforeEach(() => {
    page = new NbbfAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
