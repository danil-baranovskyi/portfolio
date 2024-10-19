import classNames from "classnames";
import styles from "./styles.module.scss";
import Image, { getImageProps } from 'next/image'
import LocationIcon from "../../../../../../../public/icons/location.svg";

const Hero = () => {
  return (
    <section className={classNames(styles["hero"], 'hero')}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-text-wrapper"]}>
          <h2 className={styles["hero-title"]}>Hi, I`m Danylo,😎</h2>
          <p className={styles["hero-sub-title"]}>Lorem ipsume Lorem ipsume Lorem ipsume Lorem ipsume Lorem ipsume Lorem ipsume Lorem ipsume Lorem ipsume Lorem ipsume Lorem ipsume</p>
        </div>
        <div>
          <span className={styles["location"]}>
            <span className={styles['location-icon']}>
              <LocationIcon />
            </span>
            <span>Kremenchug, Ukraine</span>
          </span>
          <span className={styles['online-now']}>Online now</span>
        </div>
        <div>
          <button className={styles['contact-me']}>Contact Me</button>
        </div>
      </div>
      <div className={styles["hero-img-wrapper"]}>
        <Image
          src="/images/hero-photo.jpg"
          width={470}
          height={470}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
        />
        <div className={styles["border"]}></div>
      </div>
      <div className={classNames(styles["hero-img-wrapper"], styles["hero-img-wrapper--mobile"])}>
        <Image
          src="/images/hero-photo--mobile.png"
          width={300}
          height={300}
          alt="Picture of the author"
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  )
}

export default Hero;