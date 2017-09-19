import {Component} from 'react'
import layout from '../hocs/layout'
import withDocsSidebar from '../hocs/with-docs-sidebar'
import pageMap from '../page-map'

function flatten(l, o) {
  return l.reduce((o, p) => {
    if (p.children) {
      return flatten(p.children, o)
    }
    o[p.src] = require(`../tmp/md/${p.src}`)
    return o
  }, o || {})
}

const pages = flatten(pageMap)

class DocsComponent extends Component {
  render() {
    const {body} = this.props
    return <div dangerouslySetInnerHTML={{__html: body}} />
  }
}

const Docs = layout(withDocsSidebar(DocsComponent))

Docs.getInitialProps = async ({query}) => {
  const body = pages[query.src]
  return {body}
}

export default Docs
