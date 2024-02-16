import Image from 'next/image';
import Link from 'next/link';
import {
	logo,
	User,
	Heart,
} from '../../../assets/Images';
import styles from '../../../assets/styles/components/nav.module.scss';
import { ThemeSwitch } from '../..';
import SearchBar from '../../SearchBar';

const DesktopNav: React.FC = () => {

	return (
		<div className={styles.desktop_nav}>
			<div className={styles.nav_container}>
				<div className={styles.nav_logo}>
					<Link href='/'>
						<Image src={logo} alt='logo' />
						<h1>Foodie</h1>
					</Link>
				</div>
				<SearchBar />
				<div className={styles.nav_menu}>
					<ul>
						<li>
							<Link href='/MyList'>
								<Image src={Heart} alt='Favorites' />
							</Link>
						</li>
						<li>
							<Link href='/LogIn'>
								<Image src={User} alt='Profile' />
							</Link>
						</li>
						<li className={styles.theme_switcher}>
							<ThemeSwitch />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DesktopNav;
