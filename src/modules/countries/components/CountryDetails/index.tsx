import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { useStore } from '~modules/state';
import { ActivityIndicator, Text } from '~modules/ui';
import { useTheme } from '~theme';

import { countriesUtils } from '../../services';
import themedStyles from './styles';

export type CountryDetailsProps = {
  code: string;
};

const CountryDetails: React.FC<CountryDetailsProps> = observer(props => {
  const [styles] = useTheme(themedStyles);
  const { t } = useTranslation();
  const { countriesStore } = useStore();

  useEffect(() => {
    countriesStore.getCountryDetails(props.code);

    return () => {
      countriesStore.resetCountryByCode();
    };
  }, [countriesStore, props.code]);

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

  return countriesStore.localCountryByCode ? (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <FastImage
          style={styles.flagContainer}
          resizeMode={FastImage.resizeMode.cover}
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

        {contentRow(t('timezones'), countriesStore.localCountryByCode.timezones.join(', '))}

        {contentRow(t('currencies'), countriesStore.localCountryByCode.currencies.join(', '))}
      </View>
    </View>
  ) : null;
});

export default CountryDetails;
