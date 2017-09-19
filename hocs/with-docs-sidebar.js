import {Component} from 'react'
import Link from 'next/link'
import pageMap from '../page-map'

export default function withDocsSidebar(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <nav>
            {pageMap.map((p, idx) =>
              <li key={idx}>
                <Link href={{pathname: '/doc', query: p}} as={`/docs/${p.path}`}>
                  <a>
                    {p.name}
                  </a>
                </Link>
              </li>,
            )}
          </nav>
          <section className="content">
            <WrappedComponent {...this.props} />
          </section>
          <style jsx>
            {`
              nav {
              }
              .content {
              }
            `}
          </style>
        </div>
      )
    }
  }
}
