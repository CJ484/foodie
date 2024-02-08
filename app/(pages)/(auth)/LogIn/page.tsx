'use client';
import React from 'react';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import {LogInForm} from '../../../Component';
import { logo } from '../../../assets/Images';
import styles from '../../../assets/styles/pages/formPage.module.scss';
import "react-toastify/dist/ReactToastify.css";
const LogIn = () => {

    return (
        <div className={styles.logInPage}>
            <div className={styles.logo}>
                <Image src={logo} alt="logo" />
                <h1>Foodie</h1>
            </div>
            <LogInForm />
            <ToastContainer />
        </div>
    );
    }

export default LogIn;