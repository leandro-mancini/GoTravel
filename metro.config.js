const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Remover 'svg' de assetExts e adicionar em sourceExts
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg');
defaultConfig.resolver.sourceExts.push('svg');

// Adicionar o transformer para SVGs
defaultConfig.transformer = {
  ...defaultConfig.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

const config = {
  // outras customizações opcionais
};

module.exports = wrapWithReanimatedMetroConfig(mergeConfig(defaultConfig, config));