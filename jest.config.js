export default {
  verbose: false,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js",
    "jest-fetch-mock"
  ],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  }
};
