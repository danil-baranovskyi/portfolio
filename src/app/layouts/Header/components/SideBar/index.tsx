import classNames from "classnames";
import CvBtn from "../CvBtn";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import LangSwitcher from "../LangSwitcher";

interface SideBarProps {
  isActive: boolean;
}

const SideBar = ({ isActive }: SideBarProps) => {
  const t = useTranslations('nav');
  return (
    <div className={
      classNames(styles['sidebar'], { [styles['sidebar--active']]: isActive }, 'sidebar')
    }>
      <nav className={styles['navigation']}>
        <ul className={styles['navigation-list']}>
          <li className={styles['navigation-list-item']}><a>{t("about")}</a></li>
          <li className={styles['navigation-list-item']}><a>{t("work")}</a></li>
          <li className={styles['navigation-list-item']}><a>{t("contact")}</a></li>
        </ul>
      </nav>
      <div className={styles['cv-wrapper']}>
        <LangSwitcher/>
        <CvBtn text={t("downloadCv")} />
      </div>
    </div>
  )
}

export default SideBar;