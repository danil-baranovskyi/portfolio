import classNames from "classnames";
import CvBtn from "../CvBtn";
import styles from "./styles.module.scss";

interface SideBarProps {
  isActive: boolean;
}

const SideBar = ({isActive}: SideBarProps) => {
  return (
    <div className={classNames(styles['sidebar'], {[styles['sidebar--active']]: isActive})}>
      <nav className="navigation">
        <ul className={styles['navigation-list']}>
          <li className="navigation__list-item"><a>About me</a></li>
          <li className="navigation__list-item"><a>My works</a></li>
          <li className="navigation__list-item"><a>Contact me</a></li>
        </ul>
      </nav>
      <CvBtn />
    </div>
  )
}

export default SideBar;