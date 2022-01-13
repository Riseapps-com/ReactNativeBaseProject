import { expect } from 'detox';

import { byLabel, disableAndroidEmulatorAnimations } from './utils';

describe('00-all-countries', () => {
  beforeAll(() => {
    disableAndroidEmulatorAnimations();
  });

  describe('Menu', () => {
    it('renders menu', async () => {
      await expect(byLabel('All countries')).toBeVisible();
      await expect(byLabel('Countries by region')).toBeVisible();
    });

    it('opens all countries', async () => {
      await byLabel('All countries').tap();
      await expect(byLabel('Back').atIndex(0)).toBeVisible();
      await byLabel('Back').atIndex(0).tap();
      await expect(byLabel('All countries')).toBeVisible();
    });
  });

  describe('AllCountries', () => {
    it('renders all countries', async () => {
      await byLabel('All countries').tap();
    });

    it('scrolls', async () => {
      await byLabel('Countries').scroll(200, 'down');
      await byLabel('Countries').scrollTo('top');
    });

    it('opens country details', async () => {
      await byLabel('Country list item').atIndex(0).tap();
      await expect(byLabel('Back').atIndex(0)).toBeVisible();
      await byLabel('Back').atIndex(0).tap();
      await expect(byLabel('Back').atIndex(0)).toBeVisible();
    });
  });

  describe('CountryDetails', () => {
    it('renders country details', async () => {
      await byLabel('Country list item').atIndex(0).tap();
      await expect(byLabel('Back').atIndex(0)).toBeVisible();
    });

    it('scrolls', async () => {
      await byLabel('Country details').scrollTo('bottom');
      await byLabel('Country details').scrollTo('top');
    });
  });
});
