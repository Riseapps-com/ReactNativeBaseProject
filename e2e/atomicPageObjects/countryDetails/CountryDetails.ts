import { Organism } from '../entities';
import { Image, Text } from '../shared';

class CountryDetails extends Organism {
  private image;

  private capital;

  private region;

  private subregion;

  private population;

  private currencies;

  private languages;

  // eslint-disable-next-line max-params
  constructor(
    image: string,
    capital: string,
    region: string,
    subregion: string,
    population: string,
    currencies: string,
    languages: string
  ) {
    super();
    this.image = new Image(image);
    this.capital = new Text(capital);
    this.region = new Text(region);
    this.subregion = new Text(subregion);
    this.population = new Text(population);
    this.currencies = new Text(currencies);
    this.languages = new Text(languages);
  }

  getImageElement(): Detox.IndexableNativeElement {
    return this.image.getElement();
  }

  getCapitalElement(): Detox.NativeElement {
    return this.capital.getElement();
  }

  getRegionElement(): Detox.NativeElement {
    return this.region.getElement();
  }

  getSubregionElement(): Detox.NativeElement {
    return this.subregion.getElement();
  }

  getPopulationElement(): Detox.NativeElement {
    return this.population.getElement();
  }

  getCurrenciesElement(): Detox.NativeElement {
    return this.currencies.getElement();
  }

  getLanguagesElement(): Detox.NativeElement {
    return this.languages.getElement();
  }
}

export default CountryDetails;
