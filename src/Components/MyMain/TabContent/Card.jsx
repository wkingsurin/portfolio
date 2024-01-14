import classes from "./TabContent.module.scss";

export default function Card({ children, src, alt, svg }) {
  return (
    <div className={classes.card}>
      <div className={classes["card-image-block"]}>
        {svg}
        {/* <img src={src} alt={alt} /> */}
      </div>
      <span className={classes["card-text"]}>{children}</span>
    </div>
  );
}
