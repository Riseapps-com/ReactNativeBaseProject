import { expect } from 'detox';

import { byId, disableAndroidEmulatorAnimations } from './utils';

describe('01-countries-by-region', () => {
  beforeAll(() => {
    disableAndroidEmulatorAnimations();
  });

  describe('Menu', () => {
    it('renders menu', async () => {
      await expect(byId('All countries')).toBeVisible();
      await expect(byId('Countries by region')).toBeVisible();
    });

    it('opens select region menu', async () => {
      await byId('Countries by region').tap();
      await expect(byId('Back')).toBeVisible();
      await byId('Back').tap();
      await expect(byId('Countries by region')).toBeVisible();
    });
  });

  describe('SelectRegionMenu', () => {
    it('renders select region menu', async () => {
      await byId('Countries by region').tap();
      await expect(byId('Back')).toBeVisible();
    });

    it('opens africa countries', async () => {
      await byId('africa').tap();
      await expect(byId('Back').atIndex(0)).toBeVisible();
      await byId('Back').atIndex(0).tap();
    });

    it('opens americas countries', async () => {
      await byId('americas').tap();
      await expect(byId('Back').atIndex(0)).toBeVisible();
      await byId('Back').atIndex(0).tap();
    });

    it('opens asia countries', async () => {
      await byId('asia').tap();
      await expect(byId('Back').atIndex(0)).toBeVisible();
      await byId('Back').atIndex(0).tap();
    });

    it('opens europe countries', async () => {
      await byId('europe').tap();
      await expect(byId('Back').atIndex(0)).toBeVisible();
      await byId('Back').atIndex(0).tap();
    });

    it('opens oceania', async () => {
      await byId('oceania').tap();
      await expect(byId('Back').atIndex(0)).toBeVisible();
      await byId('Back').atIndex(0).tap();
    });
  });

  describe('CountriesByRegion', () => {
    it('renders countriesByRegion', async () => {
      await byId('africa').tap();
    });

    it('scrolls', async () => {
      await byId('Countries').scroll(200, 'down');
      await byId('Countries').scrollTo('top');
    });

    it('opens country details', async () => {
      await byId('Countries list item').atIndex(0).tap();
      await expect(byId('Back').atIndex(0)).toBeVisible();
      await byId('Back').atIndex(0).tap();
      await expect(byId('Back').atIndex(0)).toBeVisible();
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
