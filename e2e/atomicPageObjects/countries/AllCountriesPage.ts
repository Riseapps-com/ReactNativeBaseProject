import CountriesPage from './CountriesPage';

class AllCountriesPage extends CountriesPage {
  constructor() {
    super([
      {
        image:
          // eslint-disable-next-line max-len
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
        title: 'Afghanistan',
        subtitle: 'Kabul',
      },
    ]);
  }
}

export default AllCountriesPage;
