import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Innocent Batman</title>
        <meta name="description" content="Innocent Batman" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>INNOCENT BATMAN</h1>
      </main>
    </div>
  );
};

export default Home;
