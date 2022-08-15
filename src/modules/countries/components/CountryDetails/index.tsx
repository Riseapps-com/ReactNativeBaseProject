import React, { useCallback } from 'react';
import { ImageBackground, ScrollView } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useItemRetriever } from '~modules/promises';
import { ActivityIndicator, Text } from '~modules/ui';
import { useTheme } from '~theme';

import { countriesApi } from '../../services';
import Card from '../Card';
import ContentRow from './ContentRow';

import themedStyles from './styles';

import type { CountryDetailsRoute } from '../../types';

const CountryDetails: React.FC = () => {
  const [styles] = useTheme(themedStyles);
  const { t } = useTranslation();
  const { params } = useRoute<CountryDetailsRoute>();
  const { code } = params;
  const getCountryDetails = useCallback(() => countriesApi.getCountryDetails(code), [code]);
  const [countryDetails, isLoadingCountryDetails] = useItemRetriever(getCountryDetails);

  if (isLoadingCountryDetails) return <ActivityIndicator />;
  if (!countryDetails) return null;

  return (
    <ScrollView testID="Country details" style={styles.container}>
      <Card style={styles.cardContainer} contentStyle={styles.contentContainer}>
        <ImageBackground
          accessibilityLabel={countryDetails.flagLink}
          style={styles.flagContainer}
          resizeMode="cover"
          source={{ uri: countryDetails.flagLink }}
        >
          <Text numberOfLines={1} style={styles.name} size="xl" fontStyle="bold">
            {countryDetails.name}
          </Text>
        </ImageBackground>

        <ContentRow title={t('countryDetails.capital')} value={countryDetails.capital} />

        <ContentRow title={t('countryDetails.region')} value={countryDetails.region} />

        <ContentRow title={t('countryDetails.subregion')} value={countryDetails.subregion} />

        <ContentRow title={t('countryDetails.population')} value={countryDetails.population} />

        <ContentRow title={t('countryDetails.currencies')} value={countryDetails.currencies} />

        <ContentRow title={t('countryDetails.languages')} value={countryDetails.languages} />
      </Card>
    </ScrollView>
  );
};

export default CountryDetails;
