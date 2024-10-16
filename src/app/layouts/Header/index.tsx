import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles['header-container']}>
				<div className="logo">&lt;DanBarans/&gt;</div>
				<div className={styles['header-content']}>
					<nav className="navigation">
						<ul className={styles['navigation-list']}>
							<li className="navigation__list-item"><a>About me</a></li>
							<li className="navigation__list-item"><a>My works</a></li>
							<li className="navigation__list-item"><a>Contact me</a></li>
						</ul>
					</nav>
					{/* <ThemeSwitcher/> */}
					<button className={styles['download-cv']}>Download cv</button>
				</div>
			</div>
		</header>
	)
}

export default Header;