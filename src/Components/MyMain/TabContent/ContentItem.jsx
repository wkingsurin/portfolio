import classes from "./TabContent.module.scss";

export default function ContentItem({ src, alt, link, name }) {
  return (
    <div className={classes["item-wrapper"]}>
      <div className={classes.item}>
        <div className={classes["image-block"]}>
          <img src={src} alt={alt} />
          <div className={`${classes["image-overlay"]} ${classes.name}`}>
            <a href={link || "#"} className={classes.open}>
              visit
            </a>
          </div>
        </div>
        <a href={link || "#"} className={classes.name}>
          {name}
        </a>
      </div>
    </div>
  );
}
