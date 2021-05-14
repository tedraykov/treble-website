import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Treble.bg</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>
            Добре дошли в <strong>Treble.bg</strong>
          </h1>
          <p className={styles.description}>Потегляме скоро</p>
        </section>
        <figure>
          <div className={styles.overlay}></div>
          <Image
            className="img"
            src="/workshop.jpeg"
            alt="Banner image"
            width={666}
            height={1000}
            layout="intrinsic"
          />
        </figure>
      </main>
    </div>
  );
}
