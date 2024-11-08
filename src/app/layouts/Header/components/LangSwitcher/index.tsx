"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import classNames from "classnames";

const LANG_BTN_WIDTH = 42;

interface ILocale {
  order: number,
  label: string,
  code: string,
}

const LOCALES: ILocale[] = [
  { label: "En", order: 0, code: "en" },
  { label: "Укр", order: 1, code: "uk" },
]

const LangSwitcher = () => {
  const [currentLocale, setCurrentLocale] = useState<ILocale>(LOCALES[0]);
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams()
  
  const handleLangClick = useCallback((clickedLocale: ILocale) => () => {
    setCurrentLocale(clickedLocale);
    router.replace(
      // @ts-expect-error This code from doc
      {pathname, params},
      {locale: clickedLocale.code}
    );
  }, [ params, pathname, router]);

  useEffect(() => {
    setCurrentLocale(() => {
      const foundLocale = LOCALES.find(localeEl => localeEl.code === locale);
      return foundLocale || LOCALES[0];
    });
  }, [locale])

  return (
    <div className={styles["lang-switcher"]}>
      {LOCALES.map((locale, i) => (
        <button
          key={i}
          onClick={handleLangClick(locale)}
          className={classNames(styles["lang-switcher-btn"],  {[styles["lang-switcher-btn--active"]]: locale.code === currentLocale.code})}
          style={{ width: LANG_BTN_WIDTH }}>{locale.label}
        </button>
      ))}
    </div>
  )
}

export default LangSwitcher;