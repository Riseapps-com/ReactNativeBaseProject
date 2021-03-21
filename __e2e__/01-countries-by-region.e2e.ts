import { expect } from 'detox';

import { testIDs } from '~config';

import { byId, byLabel, disableAndroidEmulatorAnimations } from './utils';

describe('01-countries-by-region', () => {
  beforeAll(() => {
    disableAndroidEmulatorAnimations();
  });

  describe('Menu', () => {
    it('renders menu', async () => {
      await expect(byId(testIDs.menu.allCountries)).toBeVisible();
      await expect(byId(testIDs.menu.countriesByRegion)).toBeVisible();
    });

    it('opens select region menu', async () => {
      await byId(testIDs.menu.countriesByRegion).tap();
      await expect(byLabel(testIDs.selectRegion.back).atIndex(0)).toBeVisible();
      await byLabel(testIDs.selectRegion.back).atIndex(0).tap();
      await expect(byId(testIDs.menu.countriesByRegion)).toBeVisible();
    });
  });

  describe('SelectRegionMenu', () => {
    it('renders select region menu', async () => {
      await byId(testIDs.menu.countriesByRegion).tap();
      await expect(byLabel(testIDs.selectRegion.back).atIndex(0)).toBeVisible();
    });

    it('opens africa countries', async () => {
      await byId(testIDs.selectRegion.africa).tap();
      await expect(byLabel(testIDs.countries.back).atIndex(0)).toBeVisible();
      await byLabel(testIDs.countries.back).atIndex(0).tap();
    });

    it('opens americas countries', async () => {
      await byId(testIDs.selectRegion.americas).tap();
      await expect(byLabel(testIDs.countries.back).atIndex(0)).toBeVisible();
      await byLabel(testIDs.countries.back).atIndex(0).tap();
    });

    it('opens asia countries', async () => {
      await byId(testIDs.selectRegion.asia).tap();
      await expect(byLabel(testIDs.countries.back).atIndex(0)).toBeVisible();
      await byLabel(testIDs.countries.back).atIndex(0).tap();
    });

    it('opens europe countries', async () => {
      await byId(testIDs.selectRegion.europe).tap();
      await expect(byLabel(testIDs.countries.back).atIndex(0)).toBeVisible();
      await byLabel(testIDs.countries.back).atIndex(0).tap();
    });

    it('opens oceania', async () => {
      await byId(testIDs.selectRegion.oceania).tap();
      await expect(byLabel(testIDs.countries.back).atIndex(0)).toBeVisible();
      await byLabel(testIDs.countries.back).atIndex(0).tap();
    });
  });

  describe('CountriesByRegion', () => {
    it('renders countriesByRegion', async () => {
      await byId(testIDs.selectRegion.africa).tap();
    });

    it('scrolls', async () => {
      await byId(testIDs.countries.scrollContainer).scroll(200, 'down');
      await byId(testIDs.countries.scrollContainer).scrollTo('top');
    });

    it('opens country details', async () => {
      await byId(testIDs.countries.country).atIndex(0).tap();
      await expect(byLabel(testIDs.countryDetails.back).atIndex(0)).toBeVisible();
      await byLabel(testIDs.countryDetails.back).atIndex(0).tap();
      await expect(byLabel(testIDs.countries.back).atIndex(0)).toBeVisible();
    });
  });

  describe('CountryDetails', () => {
    it('renders country details', async () => {
      await byId(testIDs.countries.country).atIndex(0).tap();
      await expect(byLabel(testIDs.countryDetails.back).atIndex(0)).toBeVisible();
    });

    it('scrolls', async () => {
      await byId(testIDs.countryDetails.scrollContainer).scrollTo('bottom');
      await byId(testIDs.countryDetails.scrollContainer).scrollTo('top');
    });
  });
});
