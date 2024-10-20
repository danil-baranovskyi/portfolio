import classNames from "classnames";
import styles from "./styles.module.scss";
import Image, { getImageProps } from 'next/image'
import LocationIcon from "../../../../../../../public/icons/location.svg";
import PhotoFrame from "@/app/components/shared/PhotoFrame";

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
    </section>
  )
}

export default Hero;