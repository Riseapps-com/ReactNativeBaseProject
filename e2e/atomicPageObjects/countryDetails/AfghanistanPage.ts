import { PageWithBackButton } from '../shared';
import CountryDetails from './CountryDetails';

class AfghanistanPage extends PageWithBackButton {
  countryDetails = new CountryDetails(
    // eslint-disable-next-line max-len
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
    'Kabul',
    'Asia',
    'Southern Asia',
    '40,218,234',
    'Afghan afghani',
    'Dari, Pashto, Turkmen'
  );
}

export default AfghanistanPage;
