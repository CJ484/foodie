import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import {toast} from 'react-toastify';
import Link from "next/link";
import Image from "next/image";
import { backButton } from "../../../assets/Images";
import styles from "../../assets/styles/pages/formPage.module.scss";

const LogInForm = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [data, setData] = useState();

  const notify = (userData: any) => {
    toast("Welcome " + userData.email);
  };

  const submitForm = (formData: any) => {
    setData(formData);
    notify(formData);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} >
      <Link className={styles.backButton} href="/">
        <Image src={backButton} alt="Back Button" />
      </Link>
      <h1>Log In</h1>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            className={styles.input}
            {...field}
            type="email"
            placeholder="Email"
          />
        )}
        rules={{ required: true }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            className={styles.input}
            {...field}
            type="password"
            placeholder="Password"
          />
        )}
        rules={{ required: true }}
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
