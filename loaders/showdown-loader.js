const showdown = require('showdown')

const converter = new showdown.Converter({
  ghCompatibleHeaderId: true,
  simplifiedAutoLink: true,
  excludeTrailingPunctuationFromURLs: true,
  tables: true,
  strikethrough: true,
  ghCodeBlocks: true,
  ghMentions: true,
})
converter.setFlavor('github')

module.exports = function(source) {
  this.cacheable()
  return converter.makeHtml(source)
}
