import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ILabelProps {
  children: ReactNode;
}

const Label: FC<ILabelProps> = ({children}) => {
  return (
    <span className={styles["label"]}>
      {children}
    </span>
  );
}

export default Label;