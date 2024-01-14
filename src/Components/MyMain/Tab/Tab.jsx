import classes from "./Tab.module.scss";

export default function Tab({ children, onClick, name, isActive }) {
  return (
    <div
      onClick={(e) => onClick(e)}
      name={name}
      className={
        isActive ? `${classes.tab} ${classes.active}` : `${classes.tab}`
      }
    >
      {children}
    </div>
  );
}
