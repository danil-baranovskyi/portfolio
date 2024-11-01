import classNames from "classnames";
import styles from "./styles.module.scss";
import Image from 'next/image'
import LocationIcon from "../../../../../../../public/icons/location.svg";
import PhotoFrame from "@/app/components/shared/PhotoFrame";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations('HomePage.hero');
  return (
    <section className={classNames(styles["hero"], 'hero')}>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-content"]}>
          <div className={styles["hero-text-wrapper"]}>
            <h2 className={styles["hero-title"]}>{t("title")}</h2>
            <p className={styles["hero-sub-title"]}>{t("subTitle")}</p>
          </div>
          <div>
            <span className={styles["location"]}>
              <span className={styles['location-icon']}>
                <LocationIcon />
              </span>
              <span>{t("location")}</span>
            </span>
            <span className={styles['online-now']}>{t("online")}</span>
          </div>
          <div>
            <button className={styles['contact-me']}>{t("contactMe")}</button>
          </div>
        </div>
        <PhotoFrame $viewportRange={{ min: 660 }}>
          <Image
            src="/images/hero-photo.jpg"
            width={470}
            height={470}
            alt="Picture of the author"
            style={{ objectFit: "cover" }}
          />
        </PhotoFrame>
        <div className={styles['img-wrapper--mobile']}>
          <PhotoFrame
            $viewportRange={{ max: 660 }}
            $styles={{
              marginBottom: 30,
              marginLeft: 20,
              marginRight: 20
            }}
            $maxWidth={300}
            $maxHeight={300}
          >
            <Image
              src="/images/hero-photo--mobile.png"
              width={230}
              height={230}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
          </PhotoFrame>
        </div>
      </div>
    </section>
  )
}

export default Hero;