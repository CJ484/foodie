import React from "react";
import { Button, Input } from "@mui/material";
import { toast } from "react-toastify";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { backButton } from "../../../assets/Images";
import styles from "../../../assets/styles/pages/formPage.module.scss";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const RegisterForm = () => {

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const notify = (userData: any) => {
    toast("Account Created for " + userData.firstName + " " + userData.lastName);
  };

  const submitForm: SubmitHandler<Inputs> = (data: any) => {
    notify(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Link className={styles.backButton} href="/">
        <Image src={backButton} alt="Back Button" />
      </Link>
      <h1>Register New Account</h1>
      <Controller
        control={control}
        name="firstName"
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            className={styles.input}
            {...field}
            type="text"
            placeholder="First Name"
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            className={styles.input}
            {...field}
            type="text"
            placeholder="Last Name"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            className={styles.input}
            {...field}
            type="email"
            placeholder="Email"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            className={styles.input}
            {...field}
            type="password"
            placeholder="Password"
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            className={styles.input}
            {...field}
            type="password"
            placeholder="Confirm Password"
          />
        )}
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
