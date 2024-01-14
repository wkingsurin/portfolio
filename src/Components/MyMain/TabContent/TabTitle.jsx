import classes from "./TabContent.module.scss";

export default function TabTitle({ children }) {
  return <h2 className={classes["tab-title"]}>{children}</h2>;
}
