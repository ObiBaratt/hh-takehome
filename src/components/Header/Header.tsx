import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={styles.header}>
      <Link href="/">
        <Image
          src={"logo-symbol.svg"}
          alt="Logo"
          width={48}
          height={48}
          className={styles.icon}
        />
      </Link>

      <SearchBar />
    </nav>
  );
};

export default Header;
