import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks.ts";
import styles from "./CartLink.module.css";
import { getNumItems } from "./cartSlice.ts";

export default function CartLink() {
  const numItems = useAppSelector(getNumItems);
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>
        🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}
      </span>
    </Link>
  );
}
