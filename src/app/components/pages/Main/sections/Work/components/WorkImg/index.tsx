import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export interface WorkImgDataDto {
  iframeSrc?: string,
  imgSrc?: string;
  mobileImgSrc?: string,
}

interface IWorkImgProps extends WorkImgDataDto {
}

const WorkImg: FC<IWorkImgProps> = ({ iframeSrc, mobileImgSrc, imgSrc }) => {
  return (
    <div className={styles["work-img"]}>
      <div className={styles["work-img-container"]}>
        {iframeSrc && <div className={styles["work-img-iframe-wrapper"]}>
          <iframe src={iframeSrc} />
        </div>}
        {imgSrc && <div className={styles["work-img-wrapper"]}>
          <Image
            src={imgSrc}
            width={480} height={300} alt="" style={{ objectFit: "cover" }}
          />
        </div>}
        {mobileImgSrc && <div className={styles["work-img--mobile-wrapper"]}>
          <Image
            src={mobileImgSrc}
            width={767} height={400} alt="" style={{ objectFit: "cover" }}
          />
        </div>}
      </div>
    </div>
  );
}

export default WorkImg;