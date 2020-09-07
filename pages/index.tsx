import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next template</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>template</h1>
    </div>
  );
}
