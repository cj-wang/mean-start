import { MeanStartPage } from './app.po';

describe('mean-start App', () => {
  let page: MeanStartPage;

  beforeEach(() => {
    page = new MeanStartPage();
  });

  it('should display brand', () => {
    page.navigateTo();
    expect(page.getBrandText()).toEqual('MEAN Start');
  });

  it('should display home menu', () => {
    page.navigateTo();
    expect(page.getHomeMenu()).toContain('Home');
  });
});
