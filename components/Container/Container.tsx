import React from "react";
import styles from "./Container.module.css";
import Content from "./Content";
import Footer from "./Footer";

const Container = () => {
  return (
    <div className={styles.Container}>
      <Content />
      <Footer />
    </div>
  );
};

export default Container;
