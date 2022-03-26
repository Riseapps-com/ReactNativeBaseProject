import { PageWithBackButton } from '../shared';
import CountryDetails from './CountryDetails';

class AlgeriaPage extends PageWithBackButton {
  countryDetails = new CountryDetails(
    'https://flagcdn.com/w320/dz.png',
    'Algiers',
    'Africa',
    'Northern Africa',
    '44,700,000',
    'Algerian dinar',
    'Arabic'
  );
}

export default AlgeriaPage;
