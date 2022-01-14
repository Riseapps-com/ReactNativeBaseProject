import { expect } from 'detox';

import { byId, disableAndroidEmulatorAnimations } from './utils';

describe('00-all-countries', () => {
  beforeAll(() => {
    disableAndroidEmulatorAnimations();
  });

  describe('Menu', () => {
    it('renders menu', async () => {
      await expect(byId('All countries')).toBeVisible();
      await expect(byId('Countries by region')).toBeVisible();
    });

    it('opens all countries', async () => {
      await byId('All countries').tap();
      await expect(byId('Back')).toBeVisible();
      await byId('Back').tap();
      await expect(byId('All countries')).toBeVisible();
    });
  });

  describe('AllCountries', () => {
    it('renders all countries', async () => {
      await byId('All countries').tap();
    });

    it('scrolls', async () => {
      await byId('Countries').scroll(200, 'down');
      await byId('Countries').scrollTo('top');
    });

    it('opens country details', async () => {
      await byId('Countries list item').atIndex(0).tap();
      await expect(byId('Back').atIndex(0)).toBeVisible();
      await byId('Back').atIndex(0).tap();
      await expect(byId('Back')).toBeVisible();
    });
  });

  describe('CountryDetails', () => {
    it('renders country details', async () => {
      await byId('Countries list item').atIndex(0).tap();
      await expect(byId('Back').atIndex(0)).toBeVisible();
    });

    it('scrolls', async () => {
      await byId('Country details').scrollTo('bottom');
      await byId('Country details').scrollTo('top');
    });
  });
});
