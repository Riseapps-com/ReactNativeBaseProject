import CountriesPage from './CountriesPage';

class AmericasPage extends CountriesPage {
  constructor() {
    super([
      { image: 'https://mainfacts.com/media/images/coats_of_arms/ai.png', title: 'Anguilla', subtitle: 'The Valley' },
    ]);
  }
}

export default AmericasPage;
