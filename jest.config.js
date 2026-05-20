// jest.config.js
module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: ['src/**/*.ts{,x}'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
