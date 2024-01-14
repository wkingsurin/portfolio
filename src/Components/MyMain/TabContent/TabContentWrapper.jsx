import classes from "./TabContent.module.scss";

import TabContent from "./TabContent";

export default function TabContentWrapper({ children }) {
  return <div className={classes["tab-content-wrapper"]}>{children}</div>;
}
