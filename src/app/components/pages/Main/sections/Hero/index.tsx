import styles from "./styles.module.scss";
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-text-wrapper"]}>
          <h2 className={styles["hero-title"]}>Hello i am danya</h2>
          <p className={styles["hero-sub-title"]}>I am super duper developer</p>
        </div>
        <div>
          <span><span>icon</span><span>Kremenchug, Ukraine</span></span>
          <span>Online now</span>
        </div>
        <div>
          <button>Socials or Contact me modal</button>
        </div>
      </div>
      <div>
        <Image
          src="/images/hero-photo.jpg"
          width={300}
          height={300}
          alt="Picture of the author"
          style={{objectFit: "contain"}}
        />
      </div>
    </section>
  )
}

export default Hero;