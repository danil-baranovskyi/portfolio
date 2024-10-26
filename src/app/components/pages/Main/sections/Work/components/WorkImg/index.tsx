import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export interface WorkImgDataDto {
  iframeSrc: string,
  mobileImgSrc: string,
}

interface IWorkImgProps extends WorkImgDataDto {
}

const WorkImg: FC<IWorkImgProps> = ({ iframeSrc, mobileImgSrc }) => {
  return (
    <div className={styles["work-img"]}>
      <div className={styles["work-img-container"]}>
        <div className={styles["work-img-iframe-wrapper"]}>
          <iframe src={iframeSrc} />
        </div>
        <div className={styles["work-img--mobile"]}>
          <Image
            src={mobileImgSrc}
            width={767} height={400} alt="" objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkImg;