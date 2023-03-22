import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [input, setInput] = useState<string>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <input
    type="text"
    placeholder="Search"
    onChange={handleInput}
    className={styles.searchBar}
    />
  )
}

export default SearchBar;
