import classNames from "classnames";
import styles from "./styles.module.scss";

import JsLogo from "@/public/icons/skills/javascript-logo.svg";
import TsLogo from "@/public/icons/skills/typescript-logo.svg";
import ReactLogo from "@/public/icons/skills/react-logo.svg";
import NextJsLogo from "@/public/icons/skills/nextjs-logo.svg";
import NodeJsLogo from "@/public/icons/skills/nodejs-logo.svg";
import ExpressJsLogo from "@/public/icons/skills/express-js-logo.svg";
import MongoDbLogo from "@/public/icons/skills/mongodb-logo.svg";
import RxJsLogo from "@/public/icons/skills/rxjs-logo.svg";
import SassLogo from "@/public/icons/skills/sass-logo.svg";
import TailWindLogo from "@/public/icons/skills/tailwind-logo.svg";
import MatUILogo from "@/public/icons/skills/angular-material-logo.svg";
import Angular from "@/public/icons/skills/angular-logo.svg";

const SkillsSvgList = [
  { icon: JsLogo, label: 'JavaScript' },
  { icon: TsLogo, label: 'TypeScript' },
  { icon: ReactLogo, label: 'React' },
  { icon: NextJsLogo, label: 'NextJS' },
  { icon: NodeJsLogo, label: 'NodeJS' },
  { icon: ExpressJsLogo, label: 'ExpressJS' },
  { icon: MongoDbLogo, label: 'MongoDB' },
  { icon: RxJsLogo, label: 'KoaJS' },
  { icon: SassLogo, label: 'Sass/Scss' },
  { icon: TailWindLogo, label: 'TailWind' },
  { icon: MatUILogo, label: 'MatUI' },
  { icon: Angular, label: 'Angualr' },
]

const Skills = () => {
  return (
    <section className={classNames(styles["skills"], "skills")}>
      <div className={styles["skills-container"]}>
        <ul className={styles["skills-list"]}>
          {SkillsSvgList.map((skillSvgNode, i) => (
            <li className={styles["skills-list-item"]} key={i}>
              {skillSvgNode.icon()}
              <span className={styles["skill-name"]}>{skillSvgNode.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills;