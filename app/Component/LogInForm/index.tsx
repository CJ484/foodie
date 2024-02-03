import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { backButton } from "../../assets/Images";
import styles from "../../assets/styles/pages/formPage.module.scss";

const LogInForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [data, setData] = useState();

  const submitForm = (formData: any) => {
    setData(formData);
    console.log(data);
    
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} >
      <Link className={styles.backButton} href="/">
        <Image src={backButton} alt="Back Button" />
      </Link>
      <h1>Log In</h1>
      <Input
        className={styles.input}
        {...(register("email"), { required: true })}
        type="email"
        placeholder="Email"
      />
      <Input
        className={styles.input}
        {...(register("password"), { required: true })}
        type="password"
        placeholder="Password"
      />
      <Button className={styles.button} type="submit">
        Log In
      </Button>
      <h2>
        <span>or</span>
      </h2>
      <Button href="/Register" className={styles.button} type="button">
        Sign Up
      </Button>
    </form>
  );
};

export default LogInForm;
