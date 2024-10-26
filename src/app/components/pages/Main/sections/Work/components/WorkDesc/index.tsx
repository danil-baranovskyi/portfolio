import Label from "@/app/components/shared/Label";
import styles from "./styles.module.scss";
import { FC } from "react";
import NewTabIcon from "@/public/icons/new-tab.svg";

export interface WorkDescDataDto {
  workLink: string;
  title: string;
  text: string;
  labelsList: string[]
}

interface IWorkDescProps extends WorkDescDataDto{

}

const WorkDesc: FC<IWorkDescProps> = ({ workLink, labelsList, text, title }) => {
  return (
    <div className={styles["work-desc"]}>
      <div className={styles["work-desc-container"]}>
        <h2 className={styles["work-desc-title"]}>{title}</h2>
        <p className={styles["work-desc-text"]}>{text}</p>
        <ul className={styles["tools-list"]}>
          {labelsList.map((label, i) => (
            <Label key={i}>
              {label}
            </Label>
          ))}
        </ul>

        <a className={styles["work-desc-link"]} href={workLink} target="_blank">
          <span className={styles["work-desc-link-icon"]}><NewTabIcon /></span> <span>Try it out</span>
        </a>
      </div>
    </div>
  );
}

export default WorkDesc;