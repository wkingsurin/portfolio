import classes from "./Tabs.module.scss";
import Tab from "../Tab/Tab";

export default function Tabs({ children }) {
  return <div className={classes.tabs}>{children}</div>;
}
