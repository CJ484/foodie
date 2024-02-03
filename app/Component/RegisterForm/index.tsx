import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { backButton } from "../../assets/Images";
import styles from "../../assets/styles/pages/formPage.module.scss";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [data, setData] = useState();

  const submitForm = (formData: any) => {
    setData(formData);
    console.log(data);
    
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Link className={styles.backButton} href="/">
        <Image src={backButton} alt="Back Button" />
      </Link>
      <h1>Register New Account</h1>
      <Input
        className={styles.input}
        {...(register("firstName"), { required: true })}
        type="text"
        placeholder="First Name"
      />
      <Input
        className={styles.input}
        {...(register("lastName"), { required: true })}
        type="text"
        placeholder="Last Name"
      />
      <Input
        className={styles.input}
        type="text"
        {...(register("email"), { required: true })}
        placeholder="Email"
      />
        <Input
            className={styles.input}
            type="password"
            {...(register("password"), { required: true })}
            placeholder="Password"
        />
        <Input
            className={styles.input}
            type="password"
            {...(register("confirmPassword"), { required: true })}
            placeholder="Confirm Password"
        />

      <Button className={styles.button} type="submit">
        Create Account
      </Button>
      <h2>
        <span>or</span>
      </h2>
      <Button href="/LogIn" className={styles.button} type="button">
        Login
      </Button>
    </form>
  );
};

export default RegisterForm;
