import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>People list | Home</title>
        <meta name="keywords" content="people" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem libero, pellentesque et libero vel, pharetra mattis magna. Vivamus rutrum nisi ac ipsum fermentum, eget faucibus diam suscipit. Cras faucibus ullamcorper elit, non hendrerit elit vestibulum nec. Nulla eget vulputate arcu, placerat pulvinar mi. In at interdum sem. Maecenas at egestas ligula. Cras nec consequat lorem, a luctus quam. Proin eget sagittis lectus. Pellentesque semper ut massa sed sagittis.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem libero, pellentesque et libero vel, pharetra mattis magna. Vivamus rutrum nisi ac ipsum fermentum, eget faucibus diam suscipit. Cras faucibus ullamcorper elit, non hendrerit elit vestibulum nec. Nulla eget vulputate arcu, placerat pulvinar mi. In at interdum sem. Maecenas at egestas ligula. Cras nec consequat lorem, a luctus quam. Proin eget sagittis lectus. Pellentesque semper ut massa sed sagittis.</p>
        <Link href="/people">
          <a className={styles.btn}>See People Listing</a>
        </Link>
      </div>
    </>
  )
}
