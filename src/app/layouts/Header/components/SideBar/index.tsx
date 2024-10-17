import classNames from "classnames";
import CvBtn from "../CvBtn";
import styles from "./styles.module.scss";

interface SideBarProps {
  isActive: boolean;
}

const SideBar = ({ isActive }: SideBarProps) => {
  return (
    <div className={classNames(styles['sidebar'], { [styles['sidebar--active']]: isActive }, 'sidebar')}>
      <nav className={styles['navigation']}>
        <ul className={styles['navigation-list']}>
          <li className={styles['navigation-list-item']}><a>About me</a></li>
          <li className={styles['navigation-list-item']}><a>My works</a></li>
          <li className={styles['navigation-list-item']}><a>Contact me</a></li>
        </ul>
      </nav>
      <div className={styles['cv-wrapper']}>
        <CvBtn />
      </div>
    </div>
  )
}

export default SideBar;