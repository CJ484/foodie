import React, { useEffect } from "react";
import Image from "next/image";
import {Switch} from "@mui/material";
import {sun, moon} from "../../../assets/Images";
import styles from '../../assets/styles/components/themeSwitch.module.scss';

const ThemeSwitch = () => {

  // ? Theme State
  // * This state will store the current theme of the application.
  // * The 'Active' state will store the current state of the theme switch.
  const [theme, setTheme] = React.useState("light");
  const [active, setActive] = React.useState(false);

  // ? Toggle Theme
  // * This function will toggle the theme between light and dark mode.
  // * It will also store the theme in local storage so that the theme
  // * will persist even after the user refreshes the page.
  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.documentElement.classList.remove("globals_dark__r55TQ");
      setActive(false);
      return true;
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      document.documentElement.classList.add("globals_dark__r55TQ");
      setActive(true);
      return false;
    }
  };

  // ? Set Theme
  // * This function will set the theme to the user's preference
  // * if the user has already set a theme in local storage.
  // * It will also set the theme to light mode if the user has not
  // * set a theme in local storage.
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (theme === localTheme) {
      console.log("theme is already set to", localTheme);
      
    }
  }
  , []);

    return (
      <div className={styles.themeSwitch}>
        <Image src={sun} alt="light mode" />
        <Switch
          checked={active}
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
          onClick={() => toggleTheme()}
        />
        <Image src={moon} alt="dark mode" />
      </div>
    );
};

export default ThemeSwitch;