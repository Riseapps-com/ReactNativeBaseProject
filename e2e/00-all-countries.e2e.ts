import { expect } from 'detox';

import { afghanistanPage, allCountriesPage, menuPage } from './atomicPageObjects';

describe('00-all-countries', () => {
  describe('Menu Screen', () => {
    it('renders menu', async () => {
      await expect(menuPage.allCountries).toBeVisible();
      await expect(menuPage.countriesByRegion).toBeVisible();
    });

    it('opens all countries', async () => {
      await menuPage.openAllCountries();
      await expect(allCountriesPage.listItem.title).toBeVisible();
      await allCountriesPage.goBack();
      await expect(menuPage.allCountries).toBeVisible();
    });
  });

  describe('AllCountries Screen', () => {
    it('renders all countries', async () => {
      await menuPage.openAllCountries();
    });

    it('scrolls the page', async () => {
      await allCountriesPage.scroll();
    });

    it('opens country details', async () => {
      await allCountriesPage.openCountry();
      await expect(afghanistanPage.backButton).toBeVisible();
      await afghanistanPage.goBack();
      await expect(allCountriesPage.backButton).toBeVisible();
    });
  });

  describe('CountryDetails Screen', () => {
    it('renders country details', async () => {
      await allCountriesPage.openCountry();
      await expect(afghanistanPage.countryDetails.image).toBeVisible();
      await expect(afghanistanPage.countryDetails.capital).toBeVisible();
      await expect(afghanistanPage.countryDetails.region).toBeVisible();
      await expect(afghanistanPage.countryDetails.subregion).toBeVisible();
      await expect(afghanistanPage.countryDetails.population).toBeVisible();
      await expect(afghanistanPage.countryDetails.currencies).toBeVisible();
      await expect(afghanistanPage.countryDetails.languages).toBeVisible();
    });
  });
});
