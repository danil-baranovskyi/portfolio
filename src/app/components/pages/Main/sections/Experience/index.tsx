import classNames from "classnames";
import styles from "./styles.module.scss";
import ExpCard from "./components/ExpCard";
import { getExperienceData } from "./data";
import SectionIntro from "@/app/components/shared/SectionIntro";
import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations("HomePage.experience");
  return (
    <section className={classNames(styles["experience"], "experience")}>
      <div className={styles["experience-container"]}>
      <SectionIntro labelText={t("label")} introText={t("text")}/>
        {getExperienceData(t).map((data, i) => (
          <ExpCard key={i} {...data} />
        ))}
      </div>
    </section>
  )
}

export default Experience;