import { IRprojectPage } from './app.po';

describe('irproject App', function() {
  let page: IRprojectPage;

  beforeEach(() => {
    page = new IRprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
