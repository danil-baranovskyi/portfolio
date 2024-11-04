import classNames from 'classnames';
import styles from './header.module.scss';
import CvBtn from './components/CvBtn';
import Burger from './components/Burger';
import { AbstractIntlMessages, NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import LangSwitcher from './components/LangSwitcher';

const Header = () => {
	const t = useTranslations('HomePage');
	const messages = useMessages();
	return (
		<header className={classNames(styles.header, 'header')}>
			<div className={styles['header-container']}>
				<div className="logo">&lt;DanBarans/&gt;</div>
				<div className={styles['header-content']}>
					<nav className={styles['navigation']}>
						<ul className={styles['navigation-list']}>
							<li className="navigation__list-item"><a href="#about">{t("nav.about")}</a></li>
							<li className="navigation__list-item"><a href="#work">{t("nav.work")}</a></li>
							<li className="navigation__list-item"><a href="#footer">{t("nav.contact")}</a></li>
						</ul>
					</nav>
					{/* <ThemeSwitcher/> */}

					<div className={styles['cv-wrapper']}>
						<LangSwitcher />
						<CvBtn text={t("nav.downloadCv")} />
					</div>
					<div className={styles['burger-wrapper']}>
						<NextIntlClientProvider
							messages={messages["HomePage"] as AbstractIntlMessages}
						>
							<Burger />
						</NextIntlClientProvider>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;