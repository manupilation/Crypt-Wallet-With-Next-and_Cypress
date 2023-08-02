const config = {
  verbose: false,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js",
    "jest-fetch-mock"
  ]
};

module.exports = config;
