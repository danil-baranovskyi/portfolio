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

interface IExpCardProps extends ExperienceData { };

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
          <h4 className={styles["about-company-header"]}>About DevIT.software:</h4>
          <p className={styles["about-company-text"]}>DevIT.software is a team within DevIT.group specializing in building applications for the Shopify platform and developing their own innovative products.</p>
          <div className={classNames(styles["responsobilities"], styles["exp-block-wrapper"])}>
            <h5>Key Responsibilities:</h5>
            <ul>
              <li><h6>Front-End Development:</h6>
                <ul>
                  <li>Designed and developed user interfaces (UIs) using HTML, CSS, JavaScript libraries like React.</li>
                  <li>Ensured responsive design for optimal viewing across different devices and cross-browser compatibility.</li>
                </ul>
              </li>

              <li><h6>Back-end Development:</h6>
                <ul>
                  <li>Developing server-side logic, APIs, and databases.</li>
                  <li>Using languages and frameworks like Node.js, GraphQl</li>
                  <li>Designing and managing databases such as MySQL, MongoDB</li>
                </ul>
              </li>
              <li><h6>Project Improvement:</h6>
                <ul>
                  <li>Collaborated with support teams to provide assistance and solutions for customers.
                  </li>
                  <li>Proactively proposed new visual styles, functionalities, and features to enhance products and stay ahead of competitors.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={classNames(styles["projects"], styles["exp-block-wrapper"])}>
            <h5 > Notable Projects:</h5>
            <ul>
              <li>DevIT.Software website</li>
              <li>Selecty (Shopify app)</li>
            </ul>
          </div>
          <div className={classNames(styles["skills"], styles["exp-block-wrapper"])}>
            <h5 > Skills and Technologies:</h5>
            <ul>
              <li>Front-End: React</li>
              <li>Back-End: Koa.js</li>
              <li>Databases: MySQL, MongoDB</li>
              <li>Integrations: Shopify API, GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;