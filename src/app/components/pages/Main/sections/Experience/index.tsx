import classNames from "classnames";
import styles from "./styles.module.scss";
import ExpCard from "./components/ExpCard";
import { experienceData } from "./data";

const Experience = () => {
  return (
    <section className={classNames(styles["experience"], "experience")}>
      <div className={styles["experience-container"]}>
        {experienceData.map((data, i) => (
          <ExpCard key={i} {...data} />
        ))}
      </div>
    </section>
  )
}

export default Experience;