import classNames from "classnames";
import styles from "./styles.module.scss";
import ExpCard from "./components/ExpCard";
import { experienceData } from "./data";
import SectionIntro from "@/app/components/shared/SectionIntro";

const Experience = () => {
  return (
    <section className={classNames(styles["experience"], "experience")}>
      <div className={styles["experience-container"]}>
      <SectionIntro labelText="Experience" introText="Quick summery of my programmer path:"/>
        {experienceData.map((data, i) => (
          <ExpCard key={i} {...data} />
        ))}
      </div>
    </section>
  )
}

export default Experience;