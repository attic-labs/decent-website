import {Component} from 'react'
import Head from 'next/head'

export default class extends Component {
  static async getInitialProps() {
    // Async stuff
    return {}
  }

  render() {
    return (
      <main>
        <Head>
          <title>DecentDB</title>
        </Head>

        <h1>DecentDB</h1>

        <section />
        <style jsx>{``}</style>
      </main>
    )
  }
}
