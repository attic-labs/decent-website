import {Component} from 'react'
import Head from 'next/head'

export default function layout(WrappedComponent, title) {
  return class extends Component {
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
          </Head>
          <WrappedComponent {...this.props} />
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
}
