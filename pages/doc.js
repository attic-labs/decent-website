import {Component} from 'react'
import layout from '../hocs/layout'
import withDocsSidebar from '../hocs/with-docs-sidebar'
import pageMap from '../page-map'

const pages = pageMap(p => require(`../tmp/md/${p.src}`))

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
