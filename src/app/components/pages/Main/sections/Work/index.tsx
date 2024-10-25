import classNames from "classnames";
import styles from "./styles.module.scss";
import WorkImg from "./components/WorkImg";
import WorkDesc from "./components/WorkDesc";
import { FC } from "react";


const Work = () => {
  return (
    <section className={classNames(styles["work"], "work",)}>
      <div className={styles["work-container"]}>
        <div className={classNames(styles["work-item"], { [styles["work-item--revert"]]: false })}>
          <div className={styles["work-item-img-wrapper"]}>
            <WorkImg />
          </div>
          <div className={styles["work-item-desc-wrapper"]}>
            <WorkDesc workLink={"/"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;