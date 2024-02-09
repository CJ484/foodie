'use client';
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import styles from "./assets/styles/pages/notFound.module.scss";
const Custom404 = () => {
  return (
    <div className={styles.page404}>
      <Spline
        className={styles.page404_spline}
        scene="https://prod.spline.design/S8diFi8vPtpwrjP2/scene.splinecode"
      />
      <Link className={styles.page404_link} href="/">
        Go back home
      </Link>
    </div>
  );
};

export default Custom404;
