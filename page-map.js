const pageList = [
  {
    name: 'Home',
    src: 'README.md',
    path: '',
  },
  {
    name: 'Intro to Noms',
    src: 'doc/intro.md',
    path: 'intro',
  },
  {
    name: 'CLI Tour',
    src: 'doc/cli-tour.md',
    path: 'cli-tour',
  },
  {
    name: 'FAQ',
    src: 'doc/faq.md',
    path: 'faq',
  },
  {
    name: 'Go Bindings',
    src: 'doc/go-tour.md',
    path: 'go-tour',
  },
  {
    name: 'Path Syntax',
    src: 'doc/spelling.md',
    path: 'path-syntax',
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
            path: 'decent/about',
          },
          {
            name: 'Quickstart',
            src: 'doc/decent/quickstart.md',
            path: 'decent/quickstart',
          },
          {
            name: 'Architectures',
            src: 'doc/decent/architectures.md',
            path: 'decent/architectures',
          },
          {
            name: 'Demos',
            children: [
              {
                name: 'P2P Chat',
                src: 'doc/decent/demo-p2p-chat.md',
                path: 'decent/demos/p2p-chat',
              },
              {
                name: 'IPFS Chat',
                src: 'doc/decent/demo-ipfs-chat.md',
                path: 'decent/demos/ipfs-chat',
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
            path: 'olap/about',
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
