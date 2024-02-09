import Link from "next/link";
import styles from "./assets/styles/pages/notFound.module.scss";
const Custom404 = () => {
  return (
    <div className={styles.page404}>
      <div className={styles.page404_text}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
      <Link className={styles.page404_link} href="/">
        Go back home
      </Link>
    </div>
  );
};

export default Custom404;
