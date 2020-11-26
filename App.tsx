import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { sizes } from '~theme';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: sizes.SPACING_XL,
    paddingHorizontal: sizes.SPACING_L,
  },
  sectionTitle: {
    fontSize: sizes.SPACING_L,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: sizes.SPACING_S,
    fontSize: sizes.BASE_FONT_SIZE,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: sizes.BASE_FONT_SIZE,
    fontWeight: '600',
    padding: sizes.SPACING_XS,
    paddingRight: sizes.BASE_FONT_SIZE,
    textAlign: 'right',
  },
});

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{'Step One'}</Text>
              <Text style={styles.sectionDescription}>
                {'Edit'} <Text style={styles.highlight}>{'App.js'}</Text>{' '}
                {'to change this screen and then come back to see your edits.'}
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{'See Your Changes'}</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{'Debug'}</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{'Learn More'}</Text>
              <Text style={styles.sectionDescription}>
                {'Read the docs to discover what to do next:'}
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
