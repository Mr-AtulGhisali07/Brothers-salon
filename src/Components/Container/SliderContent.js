import classes from "./SliderContent.module.css";



export const SliderContent = () => {



  return (
    <section className={classes.contener1}>
      <ul>
        <li><p className={classes.getting}>You Need To</p></li>
        <li><p className={classes.right}>Get OsM Look</p></li>
        <li><p className={classes.cut}>at Brother's Salon</p></li>
      </ul>
    </section>
  );
};

export const SliderContent2 = () => {
  return (
    <section className={classes.contener2}>
      <ul>
        <li><p className={classes.getting}>Getting the</p></li>
        <li><p className={classes.right}> Right Hair </p></li>
        <li><p className={classes.cut}> Cut.! For Men</p></li>
      </ul>
    </section>
  );
};

export const SliderContent3 = () => {
  return (
    <section className={classes.contener3}>
      <ul>
        <li><p className={classes.getting}>Getting the  </p></li>
        <li><p className={classes.right}> Right Hair </p></li>
        <li><p className={classes.cut}> Cut.! For Women</p></li>
      </ul>
    </section>
  );
};