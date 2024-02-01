import { Button, Input } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { logo, backButton } from '../../../assets/Images';
import styles from '../../../assets/styles/pages/login.module.scss';
const LogIn = () => {
    return (
        <div className={styles.logInPage}>
            <div className={styles.logo}>
                <Image src={logo} alt="logo" />
                <h1>Foodie</h1>
            </div>
        <form>
            <Link className={styles.backButton} href="/"><Image src={backButton} alt='Back Button'/></Link>
            <h1>Log In</h1>
            <Input className={styles.input} type="email" placeholder="Email" />
            <Input className={styles.input} type="password" placeholder="Password" />
            <Button className={styles.button} type="submit">Log In</Button>
            <h2><span>or</span></h2>
            <Button className={styles.button} type="button">Sign Up</Button>
        </form>
        </div>
    );
    }

export default LogIn;