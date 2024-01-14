import classes from "./TabContent.module.scss";

export default function ContentCardTitle({ children }) {
  return <h3 className={classes["content-card-title"]}>{children}</h3>;
}
