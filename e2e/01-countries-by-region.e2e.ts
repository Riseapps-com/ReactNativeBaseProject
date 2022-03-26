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
  describe('Menu', () => {
    it('renders menu', async () => {
      await expect(menuPage.getAllCountriesElement()).toBeVisible();
      await expect(menuPage.getCountriesByRegionElement()).toBeVisible();
    });

    it('opens select region menu', async () => {
      await menuPage.openCountriesByRegion();
      await expect(selectRegionPage.getBackButtonElement()).toBeVisible();
      await selectRegionPage.goBack();
      await expect(menuPage.getCountriesByRegionElement()).toBeVisible();
    });
  });

  describe('SelectRegionMenu', () => {
    it('renders select region menu', async () => {
      await menuPage.openCountriesByRegion();
      await expect(selectRegionPage.getBackButtonElement()).toBeVisible();
    });

    it('opens africa countries', async () => {
      await selectRegionPage.openAfrica();
      await expect(africaPage.getListItem().getTitleElement()).toBeVisible();
      await africaPage.goBack();
    });

    it('opens americas countries', async () => {
      await selectRegionPage.openAmericas();
      await expect(americasPage.getListItem().getTitleElement()).toBeVisible();
      await americasPage.goBack();
    });

    it('opens asia countries', async () => {
      await selectRegionPage.openAsia();
      await expect(asiaPage.getListItem().getTitleElement()).toBeVisible();
      await asiaPage.goBack();
    });

    it('opens europe countries', async () => {
      await selectRegionPage.openEurope();
      await expect(europePage.getListItem().getTitleElement()).toBeVisible();
      await europePage.goBack();
    });

    it('opens oceania', async () => {
      await selectRegionPage.openOceania();
      await expect(oceaniaPage.getListItem().getTitleElement()).toBeVisible();
      await oceaniaPage.goBack();
    });
  });

  describe('CountriesByRegion', () => {
    it('renders countriesByRegion', async () => {
      await selectRegionPage.openAfrica();
    });

    it('scrolls the list', async () => {
      await africaPage.scroll();
    });

    it('opens country details', async () => {
      await africaPage.openCountry();
      await expect(algerianPage.getBackButtonElement()).toBeVisible();
      await algerianPage.goBack();
      await expect(africaPage.getBackButtonElement()).toBeVisible();
    });
  });

  describe('CountryDetails', () => {
    it('renders country details', async () => {
      await africaPage.openCountry();
      await expect(algerianPage.countryDetails.getImageElement()).toBeVisible();
      await expect(algerianPage.countryDetails.getCapitalElement()).toBeVisible();
      await expect(algerianPage.countryDetails.getRegionElement()).toBeVisible();
      await expect(algerianPage.countryDetails.getSubregionElement()).toBeVisible();
      await expect(algerianPage.countryDetails.getPopulationElement()).toBeVisible();
      await expect(algerianPage.countryDetails.getCurrenciesElement()).toBeVisible();
      await expect(algerianPage.countryDetails.getLanguagesElement()).toBeVisible();
    });
  });
});
