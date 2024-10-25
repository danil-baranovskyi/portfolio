import Label from "@/app/components/shared/Label";
import styles from "./styles.module.scss";
import { FC } from "react";
import NewTabIcon from "@/public/icons/new-tab.svg";

interface IWorkDescProps {
  workLink: string;
}

const WorkDesc: FC<IWorkDescProps> = ({ workLink }) => {
  return (
    <div className={styles["work-desc"]}>
      <div className={styles["work-desc-container"]}>
        <h2 className={styles["work-desc-title"]}>Devit software website</h2>
        <p className={styles["work-desc-text"]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, eveniet. Recusandae accusantium numquam, cum nesciunt ullam, perspiciatis doloremque voluptatibus vel cumque corporis fugit voluptates similique laboriosam velit possimus doloribus quaerat.</p>

        <ul className={styles["tools-list"]}>
          <li>
            <Label>
              label
            </Label>
          </li>
          <li>
            <Label>
              label
            </Label>
          </li>
          <li>
            <Label>
              label
            </Label>
          </li>
          <li>
            <Label>
              label
            </Label>
          </li>
        </ul>

        <a className={styles["work-desc-link"]} href={workLink} target="_blank">
          <span className={styles["work-desc-link-icon"]}><NewTabIcon /></span> <span>Try it out</span>
        </a>
      </div>
    </div>
  );
}

export default WorkDesc;