const pageMap = require('../page-map')

function flatten(l, o) {
  return l.reduce((o, p) => {
    if (p.children) {
      return flatten(p.children, o)
    }
    o[p.src] = p.path
    return o
  }, o || {})
}

const pageIndex = flatten(pageMap)

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
