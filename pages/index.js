import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import SocialMedia from '../components/SocialMedia'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Treble.bg</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap'
          rel='stylesheet'
        />
        <script id="mcjs">{!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/077307ff6f62d8eb7ce999e8b/78678263386bec65146a4dee9.js")}</script>
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
