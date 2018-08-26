module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  setupFiles: ['<rootDir>/config/polyfills.js', '<rootDir>/src/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/*.js?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).js?(x)'
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^containers(.*)$': '<rootDir>/src/containers$1',
    '^features(.*)$': '<rootDir>/src/features$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^reduxUtils(.*)$': '<rootDir>/src/reduxUtils$1',
    '^stores(.*)$': '<rootDir>/src/stores$1',
    '^actions(.*)$': '<rootDir>/src/actions$1',
    '^themes(.*)$': '<rootDir>/src/themes$1',
    '^theme(.*)$': '<rootDir>/src/themes/finavi$1',
    '^constants(.*)$': '<rootDir>/src/constants$1',
    '^config(.*)$': '<rootDir>/src/config$1',
    '^routes(.*)$': '<rootDir>/src/routes$1',
    '^src(.*)$': '<rootDir>/src$1',
    '^core(?!-)(.*)$': '<rootDir>/src/core$1',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'web.js', 'web.jsx'],
  testResultsProcessor: './node_modules/jest-html-reporter',
  setupTestFrameworkScriptFile: 'mock-local-storage',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text-summary']
};
