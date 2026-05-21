module.exports = {
  testEnvironment: "node",
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/", "/expo/"],
  collectCoverageFrom: ["src/**/*.ts{,x}"],
  coverageDirectory: "coverage",
};
