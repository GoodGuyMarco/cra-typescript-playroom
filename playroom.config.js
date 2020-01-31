module.exports = {
  components: './playroom-components.ts',
  outputPath: './build/playroom',
  typeScriptFiles: [
    'src/components/**/*.{ts,tsx}',
    '!**/node_modules'
  ],
  webpackConfig: () => ({
    // Custom webpack config goes here...
  })
};
