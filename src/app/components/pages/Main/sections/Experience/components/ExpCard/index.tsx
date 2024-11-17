import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export interface ExperienceDescriptionDto {
  company: {
    title: string,
    desc: string
  },
  responsobilites: {
    title: string,
    list?: string[],
    frontEnd?: {
      title: string,
      list: string[],
    },
    backEnd?: {
      title: string,
      list: string[]
    },
    project?: {
      title: string,
      list: string[]
    },
    accessibility?: {
      title: string,
      list: string[]
    }
  },
  projects: {
    title: string,
    list: string[]
  },
  skills: {
    title: string,
    list: string[]
  }
}

export interface ExperienceData {
  logo: () => ReactNode;
  title: string;
  period: string;
  description: ExperienceDescriptionDto;
  websiteUrl: string;
  className?: string;
}

interface IExpCardProps extends ExperienceData { };

const ExpCard: FC<IExpCardProps> = ({
  title,
  description,
  logo, period,
  websiteUrl,
  className
}) => {
  const renderListItems = (list: string[]) => {
    return (
      <>
        {list.map((listEl, i) => (
          <li key={i}>{listEl}</li>
        ))}
      </>
    )
  }

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
          <h4 className={styles["about-company-header"]}>{description.company.title}</h4>
          <p className={styles["about-company-text"]}>{description.company.desc}</p>
          <div className={classNames(styles["responsobilities"], styles["exp-block-wrapper"])}>
            <h5>{description.responsobilites.title}</h5>
            <ul>
              {description.responsobilites.list && 
                renderListItems(description.responsobilites.list)
              }
                {description.responsobilites.frontEnd && <>
                  <li><h6>{description.responsobilites.frontEnd.title}</h6>
                    <ul>
                      {renderListItems(description.responsobilites.frontEnd.list)}
                    </ul>
                  </li></>
                }
                {description.responsobilites.backEnd &&
                  <li><h6>{description.responsobilites.backEnd.title}</h6>
                    <ul>
                      {renderListItems(description.responsobilites.backEnd.list)}
                    </ul>
                  </li>
                }
                {description.responsobilites.project &&
                  <li><h6>{description.responsobilites.project.title}</h6>
                    <ul>
                      {renderListItems(description.responsobilites.project.list)}
                    </ul>
                  </li>
                }
                {description.responsobilites.accessibility &&
                  <li><h6>{description.responsobilites.accessibility.title}</h6>
                    <ul>
                      {renderListItems(description.responsobilites.accessibility.list)}
                    </ul>
                  </li>
                }
              </ul>
          </div>
          <div className={classNames(styles["projects"], styles["exp-block-wrapper"])}>
            <h5>{description.projects.title}</h5>
            <ul>
              {renderListItems(description.projects.list)}
            </ul>
          </div>
          <div className={classNames(styles["skills"], styles["exp-block-wrapper"])}>
            <h5>{description.skills.title}</h5>
            <ul>
              {renderListItems(description.skills.list)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;