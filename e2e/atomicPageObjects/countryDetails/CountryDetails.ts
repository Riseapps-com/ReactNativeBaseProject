import { Organism } from '../entities';
import { Image, Text } from '../shared';

import type { CountryDetailsContent } from '../../types';

class CountryDetails extends Organism {
  private _image;

  private _capital;

  private _region;

  private _subregion;

  private _population;

  private _currencies;

  private _languages;

  constructor(countryDetails: CountryDetailsContent) {
    super();
    this._image = new Image(countryDetails.image);
    this._capital = new Text(countryDetails.capital);
    this._region = new Text(countryDetails.region);
    this._subregion = new Text(countryDetails.subregion);
    this._population = new Text(countryDetails.population);
    this._currencies = new Text(countryDetails.currencies);
    this._languages = new Text(countryDetails.languages);
  }

  get image(): Detox.IndexableNativeElement {
    return this._image.get();
  }

  get capital(): Detox.NativeElement {
    return this._capital.get();
  }

  get region(): Detox.NativeElement {
    return this._region.get();
  }

  get subregion(): Detox.NativeElement {
    return this._subregion.get();
  }

  get population(): Detox.NativeElement {
    return this._population.get();
  }

  get currencies(): Detox.NativeElement {
    return this._currencies.get();
  }

  get languages(): Detox.NativeElement {
    return this._languages.get();
  }
}

export default CountryDetails;
