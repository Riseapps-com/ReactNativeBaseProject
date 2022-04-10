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

  constructor(content: CountryDetailsContent) {
    super();
    this._image = new Image(content.image);
    this._capital = new Text(content.capital);
    this._region = new Text(content.region);
    this._subregion = new Text(content.subregion);
    this._population = new Text(content.population);
    this._currencies = new Text(content.currencies);
    this._languages = new Text(content.languages);
  }

  get image(): Detox.NativeElement {
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
