"use client";
import React from "react";
import Image from "next/image";
import { RegisterForm } from "../../../Component";
import { logo } from "../../../assets/Images";
import styles from "../../../assets/styles/pages/formPage.module.scss";
const Register = () => {
  return (
    <div className={styles.logInPage}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
        <h1>Foodie</h1>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
