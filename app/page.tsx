'use client';
import Spline from '@splinetool/react-spline';
import Nav from './Component/Nav';
import styles from './assets/styles/pages/globals.module.scss';
export default function Home() {
	return (
		<main className={styles.main}>
			<Nav />
			<div className={styles.homePage}>
				<Spline className={styles.spline} scene='https://prod.spline.design/YKciEfAnDTH5vI0T/scene.splinecode'></Spline>
				<h1>
					&quot;Unveiling Flavor:
					<br /> Where Recipes come to Life&quot;
				</h1>
			</div>
		</main>
	);
}
