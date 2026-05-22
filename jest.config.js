module.exports = {
  preset: 'react-native',
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/', '/expo/'],
  collectCoverageFrom: ['src/**/*.ts{,x}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-paper|react-native-safe-area-context|@react-native-async-storage|styled-components|expo|expo-status-bar|@expo)/)',
  ],
};
