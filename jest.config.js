module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleFileExtensions: ['vue', 'js', 'ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ["/node_modules/(?!vue-awesome)"],
  collectCoverage: true,
  clearMocks: true,
  coverageReporters: ['lcov', 'html', 'text-summary'],
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/main.js'],
}
