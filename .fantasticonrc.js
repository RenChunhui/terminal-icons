const package = require('./package.json')

module.exports = {
  name: 'term',
  inputDir: './src/icons',
  outputDir: './dist',
  fontTypes: ['ttf'],
  normalize: true,
  assetTypes: ['css', 'html'],
  formatOptions: {
    ttf: {
      url: package.url,
      description: package.description,
      version: package.fontVersion
    }
  },
  codepoints: {

  }
}
