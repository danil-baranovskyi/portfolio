"use client"

import { useState } from "react";
import LightOnBulb from '../../../../public/icons/light-on-bulb.svg';
import LightOffBulb from '../../../../public/icons/light-off-bulb.svg';

export enum Themes {
	Light = 'light',
	Dark = 'dark'
}

const ThemeSwitcher = () => {
	const [currentTheme, changeCurrentTheme] = useState(Themes.Light);

	const changeTheme = () => {
		changeCurrentTheme(state => {
			if (state === Themes.Light) {
				return Themes.Dark;
			} else {
				return Themes.Light;
			}
		})
	}

	return (
		<div className="theme-switcher">
			<button className="theme-switcher__btn" onClick={changeTheme}>
				{currentTheme === Themes.Light ?
					<span className="theme-switcher__icon"><LightOnBulb /></span>
					: <span className="theme-switcher__icon"><LightOffBulb /></span>
				}
			</button>
		</div>
	)
}

export default ThemeSwitcher;