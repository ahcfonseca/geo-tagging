export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS/SCSS imports
    "\\.(png|jpg|jpeg|svg)$": "<rootDir>/src/_tests_/fileMock.js", // Correct path to the mock file
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
