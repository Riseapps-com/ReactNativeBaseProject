import { PageWithBackButton } from '../shared';
import CountryDetails from './CountryDetails';

class AlgeriaPage extends PageWithBackButton {
  private _countryDetails = new CountryDetails({
    image: 'https://flagcdn.com/w320/dz.png',
    capital: 'Algiers',
    region: 'Africa',
    subregion: 'Northern Africa',
    population: '44,700,000',
    currencies: 'Algerian dinar',
    languages: 'Arabic',
  });

  get countryDetails(): CountryDetails {
    return this._countryDetails;
  }
}

export default AlgeriaPage;
