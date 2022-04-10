import { PageWithBackButton } from '../shared';
import CountryDetails from './CountryDetails';

import type { CountryDetailsContent } from '../../types';

class CountryDetailsPage extends PageWithBackButton {
  private readonly _countryDetails;

  constructor(content: CountryDetailsContent) {
    super();
    this._countryDetails = new CountryDetails(content);
  }

  get countryDetails(): CountryDetails {
    return this._countryDetails;
  }
}

export default CountryDetailsPage;
