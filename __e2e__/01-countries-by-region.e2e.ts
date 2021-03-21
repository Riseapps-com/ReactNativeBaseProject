import { expect } from 'detox';

import { testIDs } from '~config';

import { byId, byText, disableAndroidEmulatorAnimations } from './utils';

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
      await expect(byText('Menu')).toBeVisible();
      await byText('Menu').tap();
      await expect(byId(testIDs.menu.countriesByRegion)).toBeVisible();
    });
  });

  describe('SelectRegionMenu', () => {
    it('renders select region menu', async () => {
      await byId(testIDs.menu.countriesByRegion).tap();
      await expect(byText('Menu')).toBeVisible();
    });

    it('opens africa countries', async () => {
      await byId(testIDs.selectRegion.africa).tap();
      await expect(byText('Regions')).toBeVisible();
      await byText('Regions').tap();
    });

    it('opens americas countries', async () => {
      await byId(testIDs.selectRegion.americas).tap();
      await expect(byText('Regions')).toBeVisible();
      await byText('Regions').tap();
    });

    it('opens asia countries', async () => {
      await byId(testIDs.selectRegion.asia).tap();
      await expect(byText('Regions')).toBeVisible();
      await byText('Regions').tap();
    });

    it('opens europe countries', async () => {
      await byId(testIDs.selectRegion.europe).tap();
      await expect(byText('Regions')).toBeVisible();
      await byText('Regions').tap();
    });

    it('opens oceania', async () => {
      await byId(testIDs.selectRegion.oceania).tap();
      await expect(byText('Regions')).toBeVisible();
      await byText('Regions').tap();
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
      await expect(byText('Africa')).toBeVisible();
      await byText('Africa').tap();
      await expect(byText('Regions')).toBeVisible();
    });
  });

  describe('CountryDetails', () => {
    it('renders country details', async () => {
      await byId(testIDs.countries.country).atIndex(0).tap();
      await expect(byText('Africa')).toBeVisible();
    });

    it('scrolls', async () => {
      await byId(testIDs.countryDetails.scrollContainer).scrollTo('bottom');
      await byId(testIDs.countryDetails.scrollContainer).scrollTo('top');
    });
  });
});
