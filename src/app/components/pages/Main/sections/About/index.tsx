import classNames from "classnames";
import styles from "./styles.module.scss";
import PhotoFrame from "@/app/components/shared/PhotoFrame";
import Image from "next/image";

const About = () => {
  return (
    <section className={classNames(styles["about"], "about")}>
      <div className={styles['about-container']}>
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
          <h2 className={styles["about-title"]}>
            <span>Curius about me? </span>
            <span>(sure you are😜)</span>
          </h2>
          <div className={styles["about-text-wrapper"]}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;