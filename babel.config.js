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
            '~modules': './src/modules',
            '~theme': './src/theme',
          },
        },
      ],
    ],
  };
};
