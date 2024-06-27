import React from "react";
import styles from "./Container.module.css";

const Footer = () => {
  const getCurrentYear = (): number => {
    const currentDate = new Date();
    return currentDate.getFullYear();
};
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContent}>© {getCurrentYear()} Ariel González Fernández</div>
    </div>
  );
};

export default Footer;
