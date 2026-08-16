// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      asPath: "/",
      basePath: "",
      defaultLocale: "hu",
      isFallback: false,
      isLocaleDomain: false,
      isPreview: false,
      isReady: true,
      locale: "hu",
      locales: ["hu", "en", "de"],
      pathname: "/",
      query: {},
      route: "/",
      back: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        emit: jest.fn(),
        off: jest.fn(),
        on: jest.fn(),
      },
      push: jest.fn(),
      prefetch: jest.fn(),
      reload: jest.fn(),
      replace: jest.fn(),
    }
  },
}))
