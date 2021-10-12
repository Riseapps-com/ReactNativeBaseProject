import { useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { useStore } from '~modules/state';
import { ActivityIndicator, Error, FastImage, resizeMode, Text } from '~modules/ui';
import { useTheme } from '~theme';

import { CountryDetailsRoute } from '../../types';
import themedStyles from './styles';

const CountryDetails: React.FC = observer(() => {
  const [styles] = useTheme(themedStyles);
  const { t } = useTranslation();
  const { params } = useRoute<CountryDetailsRoute>();
  const { code } = params;
  const { countriesStore } = useStore();
  const { localCountryByCode } = countriesStore;

  useEffect(() => {
    countriesStore.getCountryByCode(code);

    return () => {
      countriesStore.resetCountryByCode();
    };
  }, [countriesStore, code]);

  const contentRow = useCallback(
    (title: string, value?: string) => {
      return (
        <View style={styles.rowContainer}>
          <Text fontStyle={'bold'} style={styles.title}>{`${title}: `}</Text>
          <Text fontStyle={'bold'} style={styles.value}>
            {value || '-'}
          </Text>
        </View>
      );
    },
    [styles.rowContainer, styles.title, styles.value]
  );

  if (countriesStore.isCountryByCodeLoading) return <ActivityIndicator />;

  if (countriesStore.countryByCodeError) return <Error />;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <FastImage
          style={styles.flagContainer}
          resizeMode={resizeMode.cover}
          source={{ uri: localCountryByCode?.flagLink }}
        >
          <Text numberOfLines={1} style={styles.name} size="biggest" fontStyle="bold">
            {localCountryByCode?.name}
          </Text>
        </FastImage>

        {contentRow(t('capital'), localCountryByCode?.capital)}

        {contentRow(t('region'), localCountryByCode?.region)}

        {contentRow(t('subregion'), localCountryByCode?.subregion)}

        {contentRow(t('population'), localCountryByCode?.population.toString())}

        {contentRow(t('currencies'), localCountryByCode?.currencies)}

        {contentRow(t('languages'), localCountryByCode?.languages)}
      </View>
    </View>
  );
});

export default CountryDetails;
