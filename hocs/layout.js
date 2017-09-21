import ReactDOM from 'react-dom'
import {Component} from 'react'
import Head from 'next/head'
import hljs from 'highlight.js'

export default function layout(WrappedComponent, title) {
  return class extends Component {
    constructor() {
      super()
      this.handleScroll = this.handleScroll.bind(this)
      this.state = {pageY: 0}
    }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
      this.highlightCode()
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll() {
      const pageY = window.pageYOffset
      window.requestAnimationFrame(() => this.setState({pageY}))
    }
    componentDidUpdate() {
      this.highlightCode()
    }
    highlightCode() {
      const domNode = ReactDOM.findDOMNode(this)
      const nodes = domNode.querySelectorAll('pre code')
      let i
      for (i = 0; i < nodes.length; i++) {
        hljs.highlightBlock(nodes[i])
      }
    }
    render() {
      return (
        <main>
          <Head>
            <title>
              {title || 'noms'}
            </title>
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="57x57"
              href="static/apple-touch-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="114x114"
              href="static/apple-touch-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="72x72"
              href="static/apple-touch-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="144x144"
              href="static/apple-touch-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="60x60"
              href="static/apple-touch-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="120x120"
              href="static/apple-touch-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="76x76"
              href="static/apple-touch-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="152x152"
              href="static/apple-touch-icon-152x152.png"
            />
            <link rel="icon" type="image/png" href="static/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="static/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="static/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="static/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="static/favicon-128.png" sizes="128x128" />
            <meta name="application-name" content="noms" />
            <meta name="msapplication-TileColor" content="#292929" />
            <meta name="msapplication-TileImage" content="mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@nomsdb" />
            <meta name="twitter:creator" content="@aboodman" />
            <meta
              name="twitter:title"
              content="Noms: The first database for the decentralized web"
            />
            <meta
              name="twitter:description"
              content="Build rich, collaborative, fully-decentralized applications without blockchains"
            />
            <meta name="twitter:image" content="https://i.imgur.com/T32k2nV.png" />
          </Head>
          <WrappedComponent {...this.props} {...this.state} />
          <style jsx global>{`
            * {
              box-sizing: border-box;
            }
            html {
              height: 100%;
            }
            body {
              font-family: 'Open Sans', sans-serif;
              margin: 0;
            }
            body,
            body > div,
            #__next,
            #__next > div {
              min-height: 100%;
            }
            p {
              margin: 0;
              margin-bottom: 1em;
            }
            a {
              color: #5fc1cc;
              text-decoration: none;
              cursor: pointer;
            }
          `}</style>
        </main>
      )
    }
  }
}
