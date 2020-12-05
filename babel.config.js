module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~assets': './assets',
            '~modules/api': './src/modules/api',
            '~modules/countries': './src/modules/countries',
            '~modules/errors': './src/modules/errors',
            '~modules/localization': './src/modules/localization',
            '~modules/logger': './src/modules/logger',
            '~modules/main': './src/modules/main',
            '~modules/navigation': './src/modules/navigation',
            '~modules/state': './src/modules/state',
            '~modules/ui': './src/modules/ui',
            '~theme': './src/theme',
          },
        },
      ],
    ],
  };
};
