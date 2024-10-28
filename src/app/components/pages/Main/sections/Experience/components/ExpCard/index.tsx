import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export interface ExperienceData {
  logo: () => ReactNode;
  title: string;
  period: string;
  description: string[];
  websiteUrl: string;
  className?: string;
}

interface IExpCardProps extends ExperienceData {};

const ExpCard: FC<IExpCardProps> = ({ title, description, logo, period, websiteUrl, className }) => {
  return (
    <div className={styles["exp-card"]}>
      <div className={styles["exp-card-container"]}>
        <div className={styles["exp-card-header"]}>
          <div
            className={
              classNames(
                styles["exp-card-company-logo"],
                { [`exp-card-company-logo--${className}`]: className }
              )
            }
          >
            <a href={websiteUrl} target="_blank">{logo()}</a>
          </div>
          <h3 className={styles["exp-card-title"]}>{title}</h3>
          <div className={styles["exp-card-period"]}>
            <span>{period}</span>
          </div>
        </div>

        <div className={styles["exp-card-content"]}>
          <ul>
            {description.map((text, i) => (
              <li key={i}><p>{text}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;