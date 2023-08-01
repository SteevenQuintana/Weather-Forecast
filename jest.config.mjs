import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
const config = {
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/app/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1'
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  collectCoverageFrom: ['components/**/*.*', 'app/**/*.*'],
  coverageReporters: ['lcov', 'text', 'text-summary']
}

export default createJestConfig(config)
