import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import NavBar from '../src/components/navbar/navbar'
import Footer from '../src/components/footer/footer'
import DummyText from '../src/components/dummytext'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>bplank</title>
        <meta name="desc" content="bplank homepage" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <NavBar />

        <div className={styles.main}>
          <div>
            <div className={styles.homebigtext}>
              Blogs. <br/>
              Refurbished. <br/>
              Reclaimed.
            </div>
            <small className={styles.small}>
              (Also open-source!)
            </small>
          </div>
          
          <p>
            We turned the log into a plank.
            <small className={styles.small + ' ' + styles.getit}>
              (Get it?!)
            </small>
          </p>
          <DummyText />
        </div>
        <Footer />
      </main>
    </div>
  )
}
