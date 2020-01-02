module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: [
    "<rootDir>/tests/unit/jest_setup.js"
  ],
};
