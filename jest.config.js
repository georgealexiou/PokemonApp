module.exports = {
  preset: 'jest-expo',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/features/**/use*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  cacheDirectory: '.jest/cache',
  coverageDirectory: '.jest/coverage',
  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coveragePathIgnorePatterns: ['styles.ts', 'constants.ts'],
  testTimeout: 5000,
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@sentry/.*)',
  ],
};
