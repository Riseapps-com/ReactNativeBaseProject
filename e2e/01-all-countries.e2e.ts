import { expect } from 'detox';

import { CountriesPage, CountryDetailsPage, MenuPage } from './atomicPageObjects';
import config from './config.json';

const menuPage = new MenuPage();
const allCountriesPage = new CountriesPage([config.data.countries.allCountries]);
const afghanistanPage = new CountryDetailsPage(config.data.countryDetails.afghanistan);

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

  describe('All Countries Screen', () => {
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

  describe('Country Details Screen', () => {
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
