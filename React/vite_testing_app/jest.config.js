// export default {
    
//   testEnvironment: "jsdom",
//   transform: {
//     "^.+\\.(tsx?)$": "ts-jest",     // for ts/tsx
//     "^.+\\.jsx?$": "babel-jest",    // for js/jsx
//   },
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };

export default {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
}


