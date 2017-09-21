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
converter.setOption('simpleLineBreaks', false)

module.exports = function(source) {
  this.cacheable()
  source = source
    // Prepend a line break to code blocks (github and showdown parse this differently)
    .replace(/```/g, '\n```')
  return converter.makeHtml(source)
}
