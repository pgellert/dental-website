const nextJest = require("next/jest")

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@content/(.*)$": "<rootDir>/src/content/$1",
    "^@markdowns/(.*)$": "<rootDir>/src/markdown/$1",
    "^flag-icons$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  testEnvironment: "jest-environment-jsdom",
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
