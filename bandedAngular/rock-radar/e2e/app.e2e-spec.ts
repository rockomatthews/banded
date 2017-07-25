import { RockRadarPage } from './app.po';

describe('rock-radar App', () => {
  let page: RockRadarPage;

  beforeEach(() => {
    page = new RockRadarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
