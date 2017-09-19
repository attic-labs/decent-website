module.exports = [
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
            name: 'Quickstart',
            src: 'doc/decent/quickstart.md',
            path: 'decent/quickstart',
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

module.exports.assets = [
  'doc/cli-screencast.png',
  'doc/data-version-control.png',
  'doc/nommy_cropped_smaller.png',
  'doc/splore.png',
  'doc/versioned-database.png',
]
