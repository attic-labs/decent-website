import {Component} from 'react'
import Link from 'next/link'
import {pageList} from '../page-map'
import Hamburger from '../svg/hamburger.svg'

const NAV_WIDTH = 200

export default function withDocsSidebar(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.handleResize = this.handleResize.bind(this)
      this.state = {showingNav: true}
    }
    componentDidMount() {
      // Automatically show/hide nav until the user indicates a preference
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
    disableResizeListener() {
      window.removeEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
      this.disableResizeListener()
    }
    handleResize() {
      const width = window.outerWidth
      this.setState({showingNav: width > 400})
    }
    toggleNav() {
      this.setState({showingNav: !this.state.showingNav})
      // Disable resize listener if user opens or closes nav
      this.disableResizeListener()
    }
    navLevel(list, name = 'nav') {
      const src = this.props.url.query.src
      return (
        <ul>
          {list.map((p, idx) => {
            if (p.children) {
              return (
                <li key={idx}>
                  <span>
                    {p.name}
                  </span>
                  {this.navLevel(p.children, p.name)}
                </li>
              )
            }
            const active = p.src === src
            const key = `${name}-${idx}`
            const content = (
              <li className={active ? 'active' : ''} key={key}>
                {p.name}
              </li>
            )
            return active
              ? content
              : <Link key={key} href={{pathname: '/doc', query: p}} as={`/docs/${p.path}`}>
                  <a>
                    {content}
                  </a>
                </Link>
          })}
          <style jsx>
            {`
              ul {
                padding: 0;
                margin: 0;
                list-style-type: none;
              }
              li {
                padding: 0.5em;
              }
              .active {
                background-color: #fbe5d0;
              }
            `}
          </style>
        </ul>
      )
    }
    render() {
      const {showingNav} = this.state
      const containerStyles = {left: showingNav ? NAV_WIDTH : 0}
      return (
        <div className="outer">
          <nav>
            <div>
              {this.navLevel(pageList)}
            </div>
          </nav>
          <section style={containerStyles} className="container">
            <a
              className={`nav-button${showingNav ? ' active' : ''}`}
              onClick={() => this.toggleNav()}
            >
              <Hamburger width={16} height={16} />
            </a>
            <div className="content">
              <WrappedComponent {...this.props} />
            </div>
          </section>
          <style jsx>
            {`
              .outer {
                overflow: hidden;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                height: 100%;
              }
              nav {
                z-index: 0;
              }
              nav > div {
                position: fixed;
                width: ${NAV_WIDTH}px;
                overflow-x: hidden;
                overflow-y: auto;
                height: 100%;
              }
              .nav-button {
                padding: 1em;
                display: block;
                opacity: 0.4;
                transition: opacity 400ms ease-out;
                position: fixed;
              }
              .nav-button.active {
                opacity: 1;
              }
              .container {
                overflow: hidden;
                overflow-y: auto;
                top: 0;
                right: 0;
                background-color: white;
                z-index: 10;
                padding: 0;
                position: absolute;
                transition: left 150ms ease-out;
                height: 100%;
              }
              .content {
                padding: 4em 12vw;
                min-width: 330px;
              }
            `}
          </style>
        </div>
      )
    }
  }
}
