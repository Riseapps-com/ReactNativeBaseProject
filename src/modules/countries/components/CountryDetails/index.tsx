import { useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { useStore } from '~modules/state';
import { ActivityIndicator, Error, FastImage, resizeMode, Text } from '~modules/ui';
import { useTheme } from '~theme';

import { countriesUtils } from '../../services';
import { CountryDetailsRoute } from '../../types';
import themedStyles from './styles';

const CountryDetails: React.FC = observer(() => {
  const [styles] = useTheme(themedStyles);
  const { t } = useTranslation();
  const { params } = useRoute<CountryDetailsRoute>();
  const { code } = params;
  const { countriesStore } = useStore();

  useEffect(() => {
    countriesStore.getCountryByCode(code);

    return () => {
      countriesStore.resetCountryByCode();
    };
  }, [countriesStore, code]);

  const contentRow = useMemo(
    () => (title: string, value: string) => {
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

  return countriesStore.localCountryByCode ? (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <FastImage
          style={styles.flagContainer}
          resizeMode={resizeMode.cover}
          source={{
            uri: countriesUtils.getCountryFlag(
              countriesStore.localCountryByCode.alpha2Code,
              'h240'
            ),
          }}
        >
          <Text numberOfLines={1} style={styles.name} size={'biggest'} fontStyle={'bold'}>
            {countriesStore.localCountryByCode.name}
          </Text>
        </FastImage>

        {contentRow(t('capital'), countriesStore.localCountryByCode.capital)}

        {contentRow(t('region'), countriesStore.localCountryByCode.region)}

        {contentRow(t('subregion'), countriesStore.localCountryByCode.subregion)}

        {contentRow(
          t('timezones'),
          countriesStore.localCountryByCode.timezones.filter(timezone => timezone).join(',\n')
        )}

        {contentRow(
          t('currencies'),
          countriesStore.localCountryByCode.currencies.filter(currency => currency).join(',\n')
        )}
      </View>
    </View>
  ) : null;
});

export default CountryDetails;
