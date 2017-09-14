import {Component} from 'react'
import Head from 'next/head'
import Button from '../components/Button'
import Jumbo from '../components/Jumbo'
import Features from '../components/Features'

export default class extends Component {
  constructor() {
    super()
    this.state = {pageY: 0}
  }
  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll())
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll())
  }
  handleScroll() {
    const pageY = window.pageYOffset
    this.setState({pageY})
  }

  render() {
    const {pageY} = this.state
    return (
      <main>
        <Head>
          <title>noms</title>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
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
        </Head>
        <Jumbo top={pageY} />
        <section className="content">
          <div className="video-container">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/KjFqW9sLQYg?rel=0&amp;showinfo=0"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <Features />
          <div className="bottom-cta">
            <span>
              We are actively seeking people who might like to try <strong>noms</strong>. If you
              think <strong>noms</strong> might be a good fit for your project,{' '}
              <a href="http://slack.noms.io">please get in touch.</a>
            </span>
            <a href="https://github.com/attic-labs/noms">
              <Button orange>
                Read more about <strong>noms</strong>
              </Button>
            </a>
          </div>
        </section>
        <span className="footer">
          © 2017 Attic Labs, Inc. • <a href="https://attic.io">About us</a>
        </span>
        <style jsx>{`
          main {
            min-height: 100%;
          }
          .content {
            position: relative;
            background-color: white;
            padding: 3rem 20vw;
            margin-top: 60vh;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .video-container {
            display: flex;
            position: relative;
            background-color: #2d3436;
            box-shadow: 6px 6px 20px -5px rgba(0, 0, 0, 0.8);
            width: 100%;
            margin-bottom: 5rem;
          }
          .video-container:before {
            content: "";
            height: 0;
            padding-top: 56.25%;
            position: relative;
            background-color: red;
          }
          .video {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .bottom-cta {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .bottom-cta span {
            margin-bottom: 2rem;
            font-size: .8em;
          }
          .footer {
            padding: 1rem;
            font-size: 0.8rem;
            text-align: center;
            width: 100%;
            display: block;
          }
        `}</style>
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          html {
            height: 100%;
          }
          body {
            font-family: 'Open Sans', sans-serif;
            color: #676767;
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
