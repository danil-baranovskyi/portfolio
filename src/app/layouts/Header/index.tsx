import classNames from 'classnames';
import styles from './header.module.scss';
import CvBtn from './components/CvBtn';
import Burger from './components/Burger';

const Header = () => {
	return (
		<header className={classNames(styles.header, 'header')}>
			<div className={styles['header-container']}>
				<div className="logo">&lt;DanBarans/&gt;</div>
				<div className={styles['header-content']}>
					<nav className={styles['navigation']}>
						<ul className={styles['navigation-list']}>
							<li className="navigation__list-item"><a>About me</a></li>
							<li className="navigation__list-item"><a>My works</a></li>
							<li className="navigation__list-item"><a>Contact me</a></li>
						</ul>
					</nav>
					{/* <ThemeSwitcher/> */}
					<div className={styles['cv-wrapper']}>
						<CvBtn />
					</div>
					<div className={styles['burger-wrapper']}>
						<Burger />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;