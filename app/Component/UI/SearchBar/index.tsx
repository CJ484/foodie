import { TextField, InputAdornment } from "@mui/material";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import { searchSymbol } from "../../../assets/Images";
import styles from "../../assets/styles/components/nav.module.scss";

const SearchBar = () => {
  	const router = useRouter();
    const [search, setSearch] = useState("" as String);


  	const searchFoodApi = () => {
      router.push(`/SearchResults?query=${search}`);
    };
    
  return (
    <>
      <TextField
        sx={{ color: "white" }}
        aria-label="Search Bar"
        placeholder="Search"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchFoodApi();
          }
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        InputProps={{
          className: styles.nav_searchBar,
          endAdornment: (
            <InputAdornment position="end">
              <Image
                onClick={searchFoodApi}
                src={searchSymbol}
                alt="search symbol"
              />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchBar;