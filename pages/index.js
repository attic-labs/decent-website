import {Component} from 'react'
import Head from 'next/head'
import Link from 'next/link'
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
          <title>Noms</title>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
          />
        </Head>
        <Jumbo top={pageY} />
        <section className="content">
          <div className="video-container">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/JCRQslvh2fE?rel=0&amp;controls=0&amp;showinfo=0"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <Features />
          <div className="bottom-cta">
            <span>
              We are actively seeking people who might like to try noms. If you think noms might be
              a good fit for your project, <a href="mailto:noms@attic.io">please get in touch.</a>
            </span>
            <Link href={'/'}>
              <Button orange>I'd like to try noms!</Button>
            </Link>
          </div>
        </section>
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
