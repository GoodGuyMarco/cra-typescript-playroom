module.exports = {
  components: './playroom-components.ts',
  outputPath: './build/playroom',
  typeScriptFiles: [
    'src/components/**/*.{ts,tsx}',
    '!**/node_modules'
  ],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: /components/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react'
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    }
  })
};
