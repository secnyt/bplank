import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import NavBar from '../src/components/navbar/navbar'
import Footer from '../src/components/footer/footer'
import DummyText from '../src/components/dummytext'
import RegisterCard from '../src/components/auth/registercard'

import styles from '../styles/Register.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="desc" content="register for bplank" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <NavBar />
     
        <RegisterCard className={styles.card} />
        
        <Footer className={styles.footer}/>
        
      </main>
    </div>
  )
}
