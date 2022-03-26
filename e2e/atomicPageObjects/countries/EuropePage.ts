import CountriesPage from './CountriesPage';

class EuropePage extends CountriesPage {
  constructor() {
    super([{ image: 'https://flagcdn.com/w320/al.png', title: 'Albania', subtitle: 'Tirana' }]);
  }
}

export default EuropePage;
