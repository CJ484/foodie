import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo, searchSymbol, User, Heart, sun, moon } from "../../../assets/Images";
import styles from "../../../assets/styles/components/nav.module.scss";
import {
  InputAdornment,
  TextField,
		Switch
} from "@mui/material";

const DesktopNav: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.desktop_nav}>
      <div className={styles.nav_container}>
        <div className={styles.nav_logo}>
          <Link href="/">
            <Image src={logo} alt="logo" />
            <h1>Foodie</h1>
          </Link>
        </div>
        <TextField
          sx={{ color: "white" }}
          aria-label="Search Bar"
          placeholder="Search"
          InputProps={{
											 className: styles.nav_searchBar,
            endAdornment: (
              <InputAdornment position="end">
                <Image src={searchSymbol} alt="search symbol" />
              </InputAdornment>
            ),
          }}
        />
        <div className={styles.nav_menu}>
          <ul>
            <li>
              <Link href="/Mylist">
                <Image src={Heart} alt="Favorites" />
              </Link>
            </li>
            <li>
              <Link href="/MyProfile">
                <Image src={User} alt="Profile" />
              </Link>
            </li>
												<li>
													<Image	src={sun} alt="light mode" />
														<Switch
																defaultChecked
																color="default"
																inputProps={{ "aria-label": "checkbox with default color" }}
														/>
													<Image	src={moon} alt="dark mode" />
												</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
