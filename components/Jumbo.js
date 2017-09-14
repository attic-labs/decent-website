import Button from './Button'

export default ({top}) => {
  const opacity = 1 - top / 800
  return (
    <section style={{top: `-${top * 0.6}px`}} id="jumbo">
      <img style={{opacity}} src="/static/logo.png" className="logo" />
      <div style={{opacity}} className="content">
        <h1>noms is the first database for the decentralized web</h1>
        <span>
          <strong>noms</strong> makes it easy to build rich, collaborative, multi-user,
          decentralized applications.
        </span>
        <div className="buttons">
          <a href="https://github.com/attic-labs/noms">
            <Button>Find out more</Button>
          </a>
          <a href="http://slack.noms.io">
            <Button>Get in touch</Button>
          </a>
        </div>
      </div>
      <style jsx>{`
        #jumbo {
          position: fixed;
          width: 100%;
          min-height: 60vh;
          background: url('/static/felt.png') fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 1rem;
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
