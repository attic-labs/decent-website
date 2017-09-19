import {Component} from 'react'
import Link from 'next/link'
import pageMap from '../page-map'

export default function withDocsSidebar(WrappedComponent) {
  return class extends Component {
    navLevel(list, name = 'nav') {
      return (
        <ul>
          {list.map((p, idx) => {
            if (p.children) {
              return (
                <li>
                  <span>
                    {p.name}
                  </span>
                  {this.navLevel(p.children, p.name)}
                </li>
              )
            }
            return (
              <li key={`${name}-${idx}`}>
                <Link href={{pathname: '/doc', query: p}} as={`/docs/${p.path}`}>
                  <a>
                    {p.name}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      )
    }
    render() {
      return (
        <div>
          <nav>
            {this.navLevel(pageMap)}
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
