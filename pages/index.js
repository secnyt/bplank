import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import NavBar from '../src/components/navbar/navbar'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>bplank</title>
        <meta name="desc" content="bplank homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
      </main>
    </div>
  )
}
