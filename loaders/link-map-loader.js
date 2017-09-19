const pageMap = require('../page-map')

const pageIndex = pageMap(p => p.path)

const mapToLocal = (full, src, hash) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!pageIndex[src]) {
      console.error(`Attempted to replace invalid link: ${src}`)
      return full
    }
    return `(/doc?src=${src}${hash})`
  }
  return `(/docs/${pageIndex[src]}${hash})`
}

const linkMap = [
  {
    pattern: /\(https?:\/\/github.com\/attic-labs\/noms\/blob\/master\/(doc\/[^#?]+?\.md)([^)]*?)\)/gi,
    replacement: mapToLocal,
  },
  {
    pattern: /\((doc\/[^#?]+?\.md)([^)]*?)\)/gi,
    replacement: mapToLocal,
  },
]

module.exports = function(source) {
  linkMap.forEach(l => {
    let m
    const p = l.pattern
    while ((m = p.exec(source)) !== null) {
      source = source.replace(m[0], l.replacement.apply(this, m))
    }
  })
  return source
}
