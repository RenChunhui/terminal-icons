const package = require('./package.json')
const codepoints = require('./src/template/mapping.json');

/**
 * @type {import('fantasticon').RunnerOptions}
 */
module.exports = {
  name: 'term',
  inputDir: './src/icons',
  outputDir: './dist',
  fontTypes: ['ttf'],
  normalize: true,
  assetTypes: ['css', 'html'],
  codepoints: codepoints,
  formatOptions: {
    ttf: {
      url: package.url,
      description: package.description,
      version: package.fontVersion
    }
  }
}
