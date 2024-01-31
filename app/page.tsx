'use client';
import Image from 'next/image';
import Nav from './Component/Nav';
import {banner} from './assets/Images';
import styles from './assets/styles/pages/globals.module.scss';
export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.homePage}>
        <Image src={banner} alt="banner"/>
        <h1>&quot;Unveiling Flavor:<br/> Where Recipes come to Life&quot;</h1>
      </div>
    </main>
  );
}
