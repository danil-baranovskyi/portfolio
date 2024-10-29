import { FC } from "react";
import Label from "../Label";
import styles from "./styles.module.scss";

interface ISectionIntroProps {
  labelText: string;
  introText?: string;
}

const SectionIntro: FC<ISectionIntroProps> = ({labelText, introText}) => {
  return (
    <div className={styles["section-intro"]}>
      <Label>
        {labelText}
      </Label>

      {introText && (
        <p>{introText}</p>
      )}
    </div>
  )
}

export default SectionIntro;