const pageList = [
  {
    name: 'Home',
    src: 'README.md',
  },
  {
    name: 'Intro to Noms',
    src: 'doc/intro.md',
  },
  {
    name: 'CLI Tour',
    src: 'doc/cli-tour.md',
  },
  {
    name: 'FAQ',
    src: 'doc/faq.md',
  },
  {
    name: 'Go Bindings',
    src: 'doc/go-tour.md',
  },
  {
    name: 'Path Syntax',
    src: 'doc/spelling.md',
  },
  {
    name: 'Use Cases',
    children: [
      {
        name: 'Decentralization',
        children: [
          {
            name: 'About',
            src: 'doc/decent/about.md',
          },
          {
            name: 'Quickstart',
            src: 'doc/decent/quickstart.md',
          },
          {
            name: 'Architecture',
            src: 'doc/decent/architectures.md',
          },
          {
            name: 'Demos',
            children: [
              {
                name: 'P2P Chat',
                src: 'doc/decent/demo-p2p-chat.md',
              },
              {
                name: 'IPFS Chat',
                src: 'doc/decent/demo-ipfs-chat.md',
              },
            ],
          },
        ],
      },
      {
        name: 'OLAP',
        children: [
          {
            name: 'About',
            src: 'doc/olap/about.md',
          },
        ],
      },
    ],
  },
]

function pageMap(op, keyOp, l, o) {
  return (l || pageList).reduce((o, p) => {
    if (p.children) {
      return pageMap(op, keyOp, p.children, o)
    }
    o[keyOp ? keyOp(p) : p.src] = op(p)
    return o
  }, o || {})
}

module.exports = pageMap
module.exports.pageList = pageList
module.exports.assets = [
  'doc/cli-screencast.png',
  'doc/decent/dist-arch.png',
  'doc/decent/p2p-arch.png',
  'doc/data-version-control.png',
  'doc/nommy_cropped_smaller.png',
  'doc/splore.png',
  'doc/versioned-database.png',
]
