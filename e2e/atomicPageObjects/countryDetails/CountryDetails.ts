import { Organism } from '../entities';
import { Image, Text } from '../shared';

import type { CountryDetailsContent } from '../../types';

class CountryDetails extends Organism {
  private readonly _image;

  private readonly _capital;

  private readonly _region;

  private readonly _subregion;

  private readonly _population;

  private readonly _currencies;

  private readonly _languages;

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

  get image(): Image {
    return this._image;
  }

  get capital(): Text {
    return this._capital;
  }

  get region(): Text {
    return this._region;
  }

  get subregion(): Text {
    return this._subregion;
  }

  get population(): Text {
    return this._population;
  }

  get currencies(): Text {
    return this._currencies;
  }

  get languages(): Text {
    return this._languages;
  }
}

export default CountryDetails;
