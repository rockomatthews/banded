import { RockRadarFrontPage } from './app.po';

describe('rock-radar-front App', () => {
  let page: RockRadarFrontPage;

  beforeEach(() => {
    page = new RockRadarFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
