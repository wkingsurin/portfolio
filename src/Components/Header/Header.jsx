import classes from "./Header.module.scss";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes["dev-name-wrapper"]}>
        <span className={classes["dev-name"]}>WKINGSURIN</span>
      </div>
    </header>
  );
}
