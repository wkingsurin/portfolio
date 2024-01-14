import classes from "./TabContent.module.scss";

export default function ContentCard({ children }) {
  return (
    <div className={classes["card-wrapper"]}>
      <div className={classes["content-card"]}>{children}</div>
    </div>
  );
}
