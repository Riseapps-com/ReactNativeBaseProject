import { expect } from 'detox';

import { CountriesPage, CountryDetailsPage, MenuPage } from './atomicPageObjects';
import data from './data.json';

const menuPage = new MenuPage();
const allCountriesPage = new CountriesPage([data.countries.allCountries]);
const afghanistanPage = new CountryDetailsPage(data.countryDetails.afghanistan);

describe('00-all-countries', () => {
  describe('Menu Screen', () => {
    it('renders menu', async () => {
      await expect(menuPage.allCountries.text.get()).toBeVisible();
      await expect(menuPage.countriesByRegion.text.get()).toBeVisible();
    });

    it('opens all countries', async () => {
      await menuPage.openAllCountries();
      await expect(allCountriesPage.listItem.title.get()).toBeVisible();
      await allCountriesPage.goBack();
      await expect(menuPage.allCountries.text.get()).toBeVisible();
    });
  });

  describe('All Countries Screen', () => {
    it('renders all countries', async () => {
      await menuPage.openAllCountries();
    });

    it('scrolls page', async () => {
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
      await expect(afghanistanPage.countryDetails.image.get()).toBeVisible();
      await expect(afghanistanPage.countryDetails.capital.get()).toBeVisible();
      await expect(afghanistanPage.countryDetails.region.get()).toBeVisible();
      await expect(afghanistanPage.countryDetails.subregion.get()).toBeVisible();
      await expect(afghanistanPage.countryDetails.population.get()).toBeVisible();
      await expect(afghanistanPage.countryDetails.currencies.get()).toBeVisible();
      await expect(afghanistanPage.countryDetails.languages.get()).toBeVisible();
    });
  });
});
