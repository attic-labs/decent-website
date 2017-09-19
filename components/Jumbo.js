import Button from './Button'
import DocsLink from './DocsLink'

const MIN_OPACITY = 0.1
const OPACITY_START = 0.4

export default ({top}) => {
  const height =
    typeof document === 'undefined'
      ? 400
      : document.getElementById('jumbo').getBoundingClientRect().height
  // Start fade at OPACITY_START % of total height
  const min = height * OPACITY_START
  const completion = Math.max((top - min) / (height - min), 0)
  // Interpolate value between 1 and MIN_OPACITY
  const opacity = 1 - (1 - MIN_OPACITY) * completion
  return (
    <section id="jumbo">
      <div style={{opacity, marginBottom: `-${top * 0.6}px`}} className="foreground">
        <img src="static/logo.png" className="logo" />
        <div className="content">
          <h1>The first database for the decentralized web</h1>
          <span>
            Easily build rich, collaborative, multi-user, fully-decentralized applications.
          </span>
          <div className="buttons">
            <DocsLink>Find out more</DocsLink>
            <a href="http://slack.noms.io">
              <Button>Get in touch</Button>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        #jumbo {
          width: 100%;
          min-height: 60vh;
          background: url('static/felt.png') fixed;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .foreground {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .logo {
          background-size: contain;
          width: 20vw;
          min-width: 200px;
          margin: 0 5vw;
        }
        .content {
          width: 40vw;
          min-width: 400px;
          color: white;
          margin: 0 5vw;
        }
        .content h1 {
          font-weight: 100;
          line-height: 65px;
          font-size: 48px;
          text-shadow: 0px 1px 2px black;
          margin: 24px 0;
        }
        .content span {
          font-weight: 200;
          font-size: 14px;
          text-shadow: 0px 1px 2px black;
        }
        .buttons {
          margin-top: 48px;
          display: flex;
          flex-wrap: wrap;
        }
        :global(.buttons a) {
          margin-right: 2rem;
          margin-bottom: 2rem;
        }
        :global(.buttons a:last-child) {
          margin-right: 0rem;
        }
        @media (max-width: 600px) {
          .content {
            min-width: 200px;
            width: 60vw;
          }
          .content h1 {
            font-size: 1.6rem;
            line-height: 2rem;
          }
          .buttons {
            justify-content: center;
          }
          :global(.buttons a) {
            margin-right: 0;
          }
        }
      `}</style>
    </section>
  )
}
