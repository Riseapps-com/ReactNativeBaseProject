import { expect } from 'detox';

import { byLabel, disableAndroidEmulatorAnimations } from './utils';

describe('01-countries-by-region', () => {
  beforeAll(() => {
    disableAndroidEmulatorAnimations();
  });

  describe('Menu', () => {
    it('renders menu', async () => {
      await expect(byLabel('All countries')).toBeVisible();
      await expect(byLabel('Countries by region')).toBeVisible();
    });

    it('opens select region menu', async () => {
      await byLabel('Countries by region').tap();
      await expect(byLabel('Back').atIndex(0)).toBeVisible();
      await byLabel('Back').atIndex(0).tap();
      await expect(byLabel('Countries by region')).toBeVisible();
    });
  });

  describe('SelectRegionMenu', () => {
    it('renders select region menu', async () => {
      await byLabel('Countries by region').tap();
      await expect(byLabel('Back').atIndex(0)).toBeVisible();
    });

    it('opens africa countries', async () => {
      await byLabel('africa').tap();
      await expect(byLabel('back').atIndex(0)).toBeVisible();
      await byLabel('back').atIndex(0).tap();
    });

    it('opens americas countries', async () => {
      await byLabel('americas').tap();
      await expect(byLabel('back').atIndex(0)).toBeVisible();
      await byLabel('back').atIndex(0).tap();
    });

    it('opens asia countries', async () => {
      await byLabel('asia').tap();
      await expect(byLabel('back').atIndex(0)).toBeVisible();
      await byLabel('back').atIndex(0).tap();
    });

    it('opens europe countries', async () => {
      await byLabel('europe').tap();
      await expect(byLabel('back').atIndex(0)).toBeVisible();
      await byLabel('back').atIndex(0).tap();
    });

    it('opens oceania', async () => {
      await byLabel('oceania').tap();
      await expect(byLabel('back').atIndex(0)).toBeVisible();
      await byLabel('back').atIndex(0).tap();
    });
  });

  describe('CountriesByRegion', () => {
    it('renders countriesByRegion', async () => {
      await byLabel('africa').tap();
    });

    it('scrolls', async () => {
      await byLabel('Countries').scroll(200, 'down');
      await byLabel('Countries').scrollTo('top');
    });

    it('opens country details', async () => {
      await byLabel('Countries list item').atIndex(0).tap();
      await expect(byLabel('Back').atIndex(0)).toBeVisible();
      await byLabel('Back').atIndex(0).tap();
      await expect(byLabel('Back').atIndex(0)).toBeVisible();
    });
  });

  describe('CountryDetails', () => {
    it('renders country details', async () => {
      await byLabel('Countries list item').atIndex(0).tap();
      await expect(byLabel('Back').atIndex(0)).toBeVisible();
    });

    it('scrolls', async () => {
      await byLabel('Country details').scrollTo('bottom');
      await byLabel('Country details').scrollTo('top');
    });
  });
});
