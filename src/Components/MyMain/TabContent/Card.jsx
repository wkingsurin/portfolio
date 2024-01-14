import { Children } from "react";
import classes from "./TabContent.module.scss";

export default function Card({ name, src, alt, children }) {
  return (
    <div className={classes.card}>
      <div className={classes["card-image-block"]}>{children}</div>
      <span className={classes["card-text"]}>{name}</span>
    </div>
  );
}
