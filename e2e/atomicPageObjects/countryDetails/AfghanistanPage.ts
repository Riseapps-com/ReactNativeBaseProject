import { PageWithBackButton } from '../shared';
import CountryDetails from './CountryDetails';

class AfghanistanPage extends PageWithBackButton {
  private _countryDetails = new CountryDetails({
    image:
      // eslint-disable-next-line max-len
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
    capital: 'Kabul',
    region: 'Asia',
    subregion: 'Southern Asia',
    population: '40,218,234',
    currencies: 'Afghan afghani',
    languages: 'Dari, Pashto, Turkmen',
  });

  get countryDetails(): CountryDetails {
    return this._countryDetails;
  }
}

export default AfghanistanPage;
