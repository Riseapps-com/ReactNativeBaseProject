import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Text } from '~modules/ui';
import { useTheme } from '~theme';

import { countriesUtils } from '../../services';
import { LocalCountry } from '../../types';
import themedStyles from './styles';

export type CountryDetailsProps = {
  country: LocalCountry;
};

const CountryDetails: React.FC<CountryDetailsProps> = props => {
  const [styles] = useTheme(themedStyles);
  const { t } = useTranslation();

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

  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <FastImage
          style={styles.flagContainer}
          resizeMode={FastImage.resizeMode.cover}
          source={{ uri: countriesUtils.getCountryFlag(props.country.alpha2Code, 'h240') }}
        >
          <Text numberOfLines={1} style={styles.name} size={'biggest'} fontStyle={'bold'}>
            {props.country.name}
          </Text>
        </FastImage>

        {contentRow(t('capital'), props.country.capital)}

        {contentRow(t('region'), props.country.region)}

        {contentRow(t('subregion'), props.country.subregion)}

        {contentRow(t('timezones'), props.country.timezones.join(', '))}

        {contentRow(t('currencies'), props.country.currencies.join(', '))}
      </View>
    </View>
  );
};

export default CountryDetails;
