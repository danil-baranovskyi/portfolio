import ThemeSwitcher from "../components/ThemeSwitcher";

const Header = () => {
	return (
		<header className="header">
			<div className="logo"></div>
			<nav className="navigation">
				<ul className="navigation__list">
					<li className="navigation__list-item">About me</li>
					<li className="navigation__list-item">My works</li>
					<li className="navigation__list-item">Contact me</li>
				</ul>
			</nav>
			<ThemeSwitcher/>
			<button className="download-cv">Download cv</button>
		</header>
	)
}

export default Header;