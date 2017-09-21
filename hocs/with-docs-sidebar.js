import {Component} from 'react'
import Link from 'next/link'
import {pageList} from '../page-map'
import {colors} from '../styles'
import Hamburger from '../svg/hamburger.svg'
import Active from '../svg/active.svg'

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
                  <span className="section">
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
                {active ? <Active className="active-icon" width={10} /> : null}
                <span>
                  {p.name}
                </span>
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
              :global(.active-icon) {
                margin-left: -15px;
                margin-right: 5px;
                animation-duration: 200ms;
                animation-name: slidein;
                animation-iteration-count: 1;
              }
              @keyframes slidein {
                from {
                  margin-left: -50px;
                  margin-right: 40px;
                }
                to {
                  margin-left: -15px;
                  margin-right: 5px;
                }
              }
              ul {
                padding: 0;
                margin: 0;
                list-style-type: none;
                font-weight: 400;
              }
              :global(.section) {
                margin-top: 0.5em;
                display: inline-block;
              }
              li {
                margin: 0.5em;
              }
              li.active {
                display: flex;
                align-items: center;
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
            <div className={showingNav ? 'visible' : ''}>
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
              nav {
                z-index: 0;
              }
              nav > div {
                position: fixed;
                width: ${NAV_WIDTH}px;
                overflow-x: hidden;
                overflow-y: auto;
                height: 100%;
                padding: 10px;
                opacity: 0;
                transition: all 150ms ease-out;
                margin-left: -30px;
              }
              nav .visible {
                opacity: 1;
                margin-left: 0;
              }
              .nav-button {
                padding: 1em;
                display: block;
                opacity: 0.4;
                transition: opacity 300ms ease-out;
                position: fixed;
              }
              .nav-button.active {
                opacity: 1;
              }
              .container {
                overflow-x: auto;
                top: 0;
                right: 0;
                background-color: white;
                z-index: 10;
                padding: 0;
                position: absolute;
                transition: left 150ms ease-out;
              }
              .content {
                padding: 4em 12vw;
                min-width: 330px;
              }
            `}
          </style>
          <style jsx global>{`
            body {
              font-family: 'Open Sans', sans-serif;
              font-size: 18px;
              font-weight: 200;
              line-height: 1.5em;
              margin: 0;
              padding: 0;
              color: #333333;
            }
            h1,
            h2,
            h3 {
              font-family: 'Open Sans', sans-serif;
              font-size: 24px;
              font-weight: 200;
              line-height: 1.3em;
              padding-top: 18px;
              color: ${colors.ORANGE};
            }
            h1 {
              font-size: 32px;
            }
            p {
              font-size: 14px;
            }
          `}</style>
        </div>
      )
    }
  }
}
