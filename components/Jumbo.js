import Link from 'next/link'
import Button from './Button'

export default ({top}) => {
  const opacity = 1 - top / 800
  return (
    <section style={{top: `-${top * 0.6}px`}} id="jumbo">
      <img style={{opacity}} src="/static/logo.png" className="logo" />
      <div style={{opacity}} className="content">
        <h1>noms is the first database for the decentralized web</h1>
        <span>
          noms makes it easy to build rich, collaborative, multi-user, decentralized applications.
        </span>
        <div className="buttons">
          <Link href={'/'}>
            <Button>Find out more</Button>
          </Link>
          <Link href={'/'}>
            <Button>Get in touch</Button>
          </Link>
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
          font-weight: 400;
          font-size: 2rem;
        }
        .content span {
          font-weight: 200;
          font-size: .8rem;
        }
        .buttons {
          margin-top: 2rem;
          display: flex;
          flex-wrap: wrap;
        }
        :global(.buttons button) {
          margin-right: 2rem;
          margin-bottom: 2rem;
        }
        :global(.buttons button:last-child) {
          margin-right: 0rem;
        }
        @media (max-width: 600px) {
          .content {
            min-width: 200px;
            text-align: center;
          }
          .content h1 {
            font-size: 1.5rem;
          }
          .buttons {
            justify-content: center;
          }
          :global(.buttons button) {
            margin-right: 0;
          }
        }
      `}</style>
    </section>
  )
}
