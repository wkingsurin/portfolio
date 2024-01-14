import classes from "./TabContent.module.scss";

export default function TabContent({ children }) {
  return <div className={classes["tab-content"]}>{children}</div>;
}
