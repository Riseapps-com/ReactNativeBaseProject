// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(false);

  return {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~assets': './assets',
            '~modules': './src/modules',
            '~theme': './src/theme',
            '~config': './config',
          },
        },
      ],
      '@babel/plugin-transform-named-capturing-groups-regex',
      'react-native-reanimated/plugin',
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
