import { useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, ScrollView } from 'react-native';

import { useRetriever } from '~modules/promises';
import { ActivityIndicator, Text } from '~modules/ui';
import { useTheme } from '~theme';

import { countriesApi } from '../../services';
import { CountryDetailsRoute } from '../../types';
import Card from '../Card';
import ContentRow from './ContentRow';
import themedStyles from './styles';

const CountryDetails: React.FC = () => {
  const [styles] = useTheme(themedStyles);
  const { t } = useTranslation();
  const { params } = useRoute<CountryDetailsRoute>();
  const { code } = params;
  const getCountryDetails = useCallback(() => countriesApi.getCountryDetails(code), [code]);
  const [countryDetails, isLoadingCountryDetails] = useRetriever(getCountryDetails);

  if (isLoadingCountryDetails) return <ActivityIndicator />;
  if (!countryDetails) return null;

  return (
    <ScrollView testID="Country details" style={styles.container}>
      <Card style={styles.cardContainer} contentStyle={styles.contentContainer}>
        <ImageBackground style={styles.flagContainer} resizeMode="cover" source={{ uri: countryDetails.flagLink }}>
          <Text numberOfLines={1} style={styles.name} size="xl" fontStyle="bold">
            {countryDetails.name}
          </Text>
        </ImageBackground>

        <ContentRow title={t('capital')} value={countryDetails.capital} />

        <ContentRow title={t('region')} value={countryDetails.region} />

        <ContentRow title={t('subregion')} value={countryDetails.subregion} />

        <ContentRow title={t('population')} value={countryDetails.population} />

        <ContentRow title={t('currencies')} value={countryDetails.currencies} />

        <ContentRow title={t('languages')} value={countryDetails.languages} />
      </Card>
    </ScrollView>
  );
};

export default CountryDetails;
