import styles from "./styles.module.scss";
import Image from "next/image";

const WorkImg = () => {
  return (
    <div className={styles["work-img"]}>
      <div className={styles["work-img-container"]}>
        <iframe src="https://devit.software/"/>
        {/* <Image src={"/images/works/devit-software-work.png"} width={500} height={400} alt="" objectFit="contain"/> */}
      </div>
    </div>
  );
}

export default WorkImg;