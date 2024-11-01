import classNames from "classnames";
import styles from "./styles.module.scss";
import PhotoFrame from "@/app/components/shared/PhotoFrame";
import Image from "next/image";
import SectionIntro from "@/app/components/shared/SectionIntro";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations('HomePage.about');

  return (
    <section id="about" className={classNames(styles["about"], "about")}>
      <SectionIntro labelText={t("label")} />
      <div className={styles["about-container"]}>
        <div className={styles["about-img-wrapper"]}>
          <PhotoFrame>
            <Image
              src="/images/hero-photo.jpg"
              width={470}
              height={470}
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
          </PhotoFrame>
        </div>
        <div className={styles["about-content"]}>
          <h2 className={styles["about-title"]} dangerouslySetInnerHTML={{__html: t.raw('title')}}>
          </h2>
          <div className={styles["about-text-wrapper"]}>
            <p>{t("desc._1")}</p>
            <p>{t("desc._2")}</p>
            <p>{t("desc._3")}</p>
            <p>{t("desc._4")}</p>
            <p>{t("desc._5")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;