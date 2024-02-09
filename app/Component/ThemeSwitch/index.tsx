import React, {useState} from "react";
import Image from "next/image";
import {Switch} from "@mui/material";
import {sun, moon} from "../../assets/Images";

const ThemeSwitch = () => {
    const [theme, setTheme] = useState("light");


    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        document.querySelector("body")?.classList.toggle("dark");
    };

    
    return (
      <>
        <Image src={sun} alt="light mode" />
        <Switch
          checked={theme === "dark"}
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
            onClick={toggleTheme}
        />
        <Image src={moon} alt="dark mode" />
      </>
    );
};

export default ThemeSwitch;