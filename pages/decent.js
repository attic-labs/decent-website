import {Component} from 'react'
import layout from '../hocs/layout'
import Jumbo from '../components/Jumbo'
import Features from '../components/Features'
import DocsLink from '../components/DocsLink'

class Decent extends Component {
  render() {
    const {pageY} = this.props
    return (
      <div>
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
              We are actively seeking people who might like to try noms. If that's you,{' '}
              <a href="http://slack.noms.io">please get in touch.</a>
            </span>
            <DocsLink orange>
              Read more about <strong>noms</strong>
            </DocsLink>
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
      </div>
    )
  }
}

export default layout(Decent)
