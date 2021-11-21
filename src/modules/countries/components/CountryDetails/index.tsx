import { useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, View } from 'react-native';

import { useRetriever } from '~modules/promises';
import { ActivityIndicator, Text } from '~modules/ui';
import { useTheme } from '~theme';

import { countriesApi } from '../../services';
import { CountryDetailsRoute } from '../../types';
import themedStyles from './styles';

const CountryDetails: React.FC = () => {
  const [styles] = useTheme(themedStyles);
  const { t } = useTranslation();
  const { params } = useRoute<CountryDetailsRoute>();
  const { code } = params;
  const [countryDetails, isLoadingCountryDetails] = useRetriever(
    () => countriesApi.getCountryDetails(code),
    [code]
  );

  const contentRow = useCallback(
    (title: string, value?: string) => {
      return (
        <View style={styles.rowContainer}>
          <Text fontStyle="bold" style={styles.title}>{`${title}: `}</Text>
          <Text fontStyle="bold" style={styles.value}>
            {value || '-'}
          </Text>
        </View>
      );
    },
    [styles.rowContainer, styles.title, styles.value]
  );

  if (isLoadingCountryDetails) return <ActivityIndicator />;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <ImageBackground
          style={styles.flagContainer}
          resizeMode="cover"
          source={{ uri: countryDetails.flagLink }}
        >
          <Text numberOfLines={1} style={styles.name} size="biggest" fontStyle="bold">
            {countryDetails.name}
          </Text>
        </ImageBackground>

        {contentRow(t('capital'), countryDetails.capital)}

        {contentRow(t('region'), countryDetails.region)}

        {contentRow(t('subregion'), countryDetails.subregion)}

        {contentRow(t('population'), countryDetails.population.toString())}

        {contentRow(t('currencies'), countryDetails.currencies)}

        {contentRow(t('languages'), countryDetails.languages)}
      </View>
    </View>
  );
};

export default CountryDetails;
