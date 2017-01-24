import { browser, element, by } from 'protractor';

export class MeanStartPage {
  navigateTo() {
    return browser.get('/');
  }

  getBrandText() {
    return element(by.css('app-root .navbar-brand')).getText();
  }

  getHomeMenu() {
    return element(by.css('app-root [routerlink="/"]')).getText();
  }
}
