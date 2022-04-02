import { expect } from 'detox';

import {
  africaPage,
  algerianPage,
  americasPage,
  asiaPage,
  europePage,
  menuPage,
  oceaniaPage,
  selectRegionPage,
} from './atomicPageObjects';

describe('01-countries-by-region', () => {
  describe('Menu Screen', () => {
    it('renders menu', async () => {
      await expect(menuPage.allCountries).toBeVisible();
      await expect(menuPage.countriesByRegion).toBeVisible();
    });

    it('opens select region menu', async () => {
      await menuPage.openCountriesByRegion();
      await expect(selectRegionPage.backButton).toBeVisible();
      await selectRegionPage.goBack();
      await expect(menuPage.countriesByRegion).toBeVisible();
    });
  });

  describe('SelectRegionMenu Screen', () => {
    it('renders select region menu', async () => {
      await menuPage.openCountriesByRegion();
      await expect(selectRegionPage.backButton).toBeVisible();
    });

    it('opens africa countries', async () => {
      await selectRegionPage.openAfrica();
      await expect(africaPage.listItem.title).toBeVisible();
      await africaPage.goBack();
    });

    it('opens americas countries', async () => {
      await selectRegionPage.openAmericas();
      await expect(americasPage.listItem.title).toBeVisible();
      await americasPage.goBack();
    });

    it('opens asia countries', async () => {
      await selectRegionPage.openAsia();
      await expect(asiaPage.listItem.title).toBeVisible();
      await asiaPage.goBack();
    });

    it('opens europe countries', async () => {
      await selectRegionPage.openEurope();
      await expect(europePage.listItem.title).toBeVisible();
      await europePage.goBack();
    });

    it('opens oceania', async () => {
      await selectRegionPage.openOceania();
      await expect(oceaniaPage.listItem.title).toBeVisible();
      await oceaniaPage.goBack();
    });
  });

  describe('CountriesByRegion Screen', () => {
    it('renders countriesByRegion', async () => {
      await selectRegionPage.openAfrica();
    });

    it('scrolls the list', async () => {
      await africaPage.scroll();
    });

    it('opens country details', async () => {
      await africaPage.openCountry();
      await expect(algerianPage.backButton).toBeVisible();
      await algerianPage.goBack();
      await expect(africaPage.backButton).toBeVisible();
    });
  });

  describe('CountryDetails Screen', () => {
    it('renders country details', async () => {
      await africaPage.openCountry();
      await expect(algerianPage.countryDetails.image).toBeVisible();
      await expect(algerianPage.countryDetails.capital).toBeVisible();
      await expect(algerianPage.countryDetails.region).toBeVisible();
      await expect(algerianPage.countryDetails.subregion).toBeVisible();
      await expect(algerianPage.countryDetails.population).toBeVisible();
      await expect(algerianPage.countryDetails.currencies).toBeVisible();
      await expect(algerianPage.countryDetails.languages).toBeVisible();
    });
  });
});
