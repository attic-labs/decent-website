module.exports = {
  async exportPathMap() {
    const pages = []
    // Combine the map of post pages with the home
    return Object.assign({}, pages, {
      '/': {page: '/'},
    })
  },
}
