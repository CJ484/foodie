import React from "react";
import Image from "next/image";
import {Switch} from "@mui/material";
import {sun, moon} from "../../../assets/Images";
import styles from '../../../assets/styles/components/themeSwitch.module.scss';

const ThemeSwitch = () => {

  // ? Theme State
  // * This state will store the current theme of the application.
  // * The 'Active' state will store the current state of the theme switch.
  const [active, setActive] = React.useState(false);

  // ? Toggle Theme
  // * This function will toggle the theme between light and dark mode.
  // * It will also store the theme in local storage so that the theme
  // * will persist even after the user refreshes the page.
  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("globals_dark__r55TQ");
      setActive(false);
      return true;
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("globals_dark__r55TQ");
      setActive(true);
      return false;
    }
  };

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