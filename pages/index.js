import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import Router from 'next/router'
import NProgress from 'nprogress'
import SocialMedia from '../components/SocialMedia'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Treble.bg</title>
        <link rel='icon' href='/favicon.ico' />
        <script src='https://use.fontawesome.com/856f95c207.js' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap'
          rel='stylesheet'
        />
      </Head>

      <nav className={styles.nav}>
        <figure className={styles.logo}>
          <img src='/tr-logo.svg' alt='Treble.bg logo' />
        </figure>
      </nav>

      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>
            Добре дошли в <strong>Treble.bg</strong>
          </h1>
          <p className={styles.description}>Очаквайте скоро...</p>
        </section>
        <figure>
          <div className={styles.overlay} />
          <Image
            src='/workshop.jpeg'
            alt='Banner image'
            width={666}
            height={1000}
          />
        </figure>
      </main>
      <footer className={styles.socialMedia}>
        <SocialMedia />
      </footer>
    </div>
  )
}
