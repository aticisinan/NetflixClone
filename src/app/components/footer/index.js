import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { MdRocket } from "react-icons/md";

function Footer() {
  return (
    <footer className={styles.footer}>
      <MdRocket />
      <Link href="https://www.linkedin.com/in/sinanatici34/" target="_blank">
        Sinan Can Atici
      </Link>
    </footer>
  );
}

export default Footer;
