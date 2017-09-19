const pageMap = require('../page-map')

const pageIndex = pageMap.reduce((o, p) => {
  o[p.src] = p.path
  return o
}, {})

const mapToLocal = (_, $1, $2) => {
  if (process.env.NODE_ENV !== 'production') {
    return `/doc?src=${$1}${$2}`
  }
  return `/docs/${pageIndex[$1]}${$2}`
}

const linkMap = [
  {
    pattern: /https?:\/\/github.com\/attic-labs\/noms\/blob\/master\/(doc\/[^#?]+)([^"']*)/gi,
    replacement: mapToLocal,
  },
  {
    pattern: /(doc\/.+\.md)([^"']*)/gi,
    replacement: mapToLocal,
  },
]

module.exports = function(source) {
  this.cacheable()
  linkMap.forEach(l => {
    let m
    while ((m = l.pattern.exec(source)) !== null) {
      source = source.replace(m[0], l.replacement(...m))
    }
  })
  return source
}
