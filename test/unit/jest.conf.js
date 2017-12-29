const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest',
    '^.*\\.vue$': '<rootDir>/node_modules/vue-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,vue}',
    '!src/main.ts',
    '!src/router/index.ts',
    '!src/store/index.ts',
    '!src/utils/vuex-decorators.ts',
    '!**/node_modules/**',
    '!src/*.d.ts',
  ],
};
