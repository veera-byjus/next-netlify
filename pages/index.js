import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <div style="background-color:powderblue;" align="center">

          <h1>This is a heading</h1>
          <p>This is a paragraph.</p>
    </div>

      </main>

      <Footer />
    </div>
  )
}
