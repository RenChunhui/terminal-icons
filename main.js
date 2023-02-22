import { FontAssetType, generateFonts, OtherAssetType } from 'fantasticon'

generateFonts({
  name: 'term',
  inputDir: 'src/icons',
  outputDir: 'dist',
  fontTypes: [
    FontAssetType.TTF
  ],
  normalize: true,
  assetTypes: [
    OtherAssetType.CSS,
    OtherAssetType.HTML
  ],
  codepoints: {},
  formatOptions: {
    ttf: {

    }
  }
}).then(result => {
  console.log(result)
})
