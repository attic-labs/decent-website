const path = require('path')
const pageMap = require('./page-map')

const emitLoader = {
  loader: 'emit-file-loader',
  options: {
    name: 'dist/[path][name].[ext]',
  },
}

module.exports = {
  webpack(config) {
    // Add a custom loaders for markdown files (and the images they reference)
    config.module = config.module || {}
    config.module.rules = config.module.rules || []
    config.module.rules.push({test: /\.png$/, use: [emitLoader, 'url-loader?mimetype=image/png']})
    config.module.rules.push({
      test: /\.md(\?[^?]*)?$/,
      use: [
        emitLoader,
        {
          loader: 'html-loader',
          options: {
            root: 'https://github.com/attic-labs/noms',
            attrs: ['img:src'],
          },
        },
        {
          loader: 'showdown-loader',
        },
        {
          loader: 'link-map-loader',
        },
      ],
    })
    config.resolveLoader = config.resolveLoader || {}
    config.resolveLoader.modules = config.resolveLoader.modules || []
    config.resolveLoader.modules.push(path.join(__dirname, './loaders'))
    return config
  },
  async exportPathMap() {
    const pages = pageMap(
      p => ({
        page: '/doc',
        query: p,
      }),
      p => `/${p.src}`,
    )

    // Combine the map of post pages with the decent landing page
    return Object.assign({}, pages, {
      '/docs': {page: '/doc', query: {src: 'README.md'}},
      '/decent': {page: '/decent'},
    })
  },
}
