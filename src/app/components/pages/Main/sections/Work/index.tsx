import classNames from "classnames";
import styles from "./styles.module.scss";
import WorkImg from "./components/WorkImg";
import WorkDesc from "./components/WorkDesc";
import { workDataList } from "./data";
import SectionIntro from "@/app/components/shared/SectionIntro";

const Work = () => {
  return (
    <section className={classNames(styles["work"], "work",)}>
      <div className={styles["work-container"]}>
        <SectionIntro labelText="Work" introText="Some of my noteworthy works that i have built:"/>
        {workDataList.map((workData, i) => (
          <div
            key={i}
            className={
              classNames(
                styles["work-item"],
                { [styles["work-item--revert"]]: i % 2 !== 0 }
              )
            }
          >
            <div className={styles["work-item-img-wrapper"]}>
              <WorkImg {...workData} />
            </div>
            <div className={styles["work-item-desc-wrapper"]}>
              <WorkDesc  {...workData} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;