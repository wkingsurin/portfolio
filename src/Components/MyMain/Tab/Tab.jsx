import classes from "./Tab.module.scss";

export default function Tab({ children, onClick, name }) {
  return (
    <div onClick={(e) => onClick(e)} name={name} className={classes.tab}>
      {children}
    </div>
  );
}
