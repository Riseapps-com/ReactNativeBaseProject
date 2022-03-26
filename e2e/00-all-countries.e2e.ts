import { expect } from 'detox';

import { afghanistanPage, allCountriesPage, menuPage } from './atomicPageObjects';

describe('00-all-countries', () => {
  describe('Menu', () => {
    it('renders menu', async () => {
      await expect(menuPage.getAllCountriesElement()).toBeVisible();
      await expect(menuPage.getCountriesByRegionElement()).toBeVisible();
    });

    it('opens all countries', async () => {
      await menuPage.openAllCountries();
      await expect(allCountriesPage.getListItem().getTitleElement()).toBeVisible();
      await allCountriesPage.goBack();
      await expect(menuPage.getAllCountriesElement()).toBeVisible();
    });
  });

  describe('AllCountries', () => {
    it('renders all countries', async () => {
      await menuPage.openAllCountries();
    });

    it('scrolls the page', async () => {
      await allCountriesPage.scroll();
    });

    it('opens country details', async () => {
      await allCountriesPage.openCountry();
      await expect(afghanistanPage.getBackButtonElement()).toBeVisible();
      await afghanistanPage.goBack();
      await expect(allCountriesPage.getBackButtonElement()).toBeVisible();
    });
  });

  describe('CountryDetails', () => {
    it('renders country details', async () => {
      await allCountriesPage.openCountry();
      await expect(afghanistanPage.countryDetails.getImageElement()).toBeVisible();
      await expect(afghanistanPage.countryDetails.getCapitalElement()).toBeVisible();
      await expect(afghanistanPage.countryDetails.getRegionElement()).toBeVisible();
      await expect(afghanistanPage.countryDetails.getSubregionElement()).toBeVisible();
      await expect(afghanistanPage.countryDetails.getPopulationElement()).toBeVisible();
      await expect(afghanistanPage.countryDetails.getCurrenciesElement()).toBeVisible();
      await expect(afghanistanPage.countryDetails.getLanguagesElement()).toBeVisible();
    });
  });
});
