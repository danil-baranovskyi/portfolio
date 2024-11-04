import classNames from "classnames";
import styles from "./styles.module.scss";
import Label from "@/app/components/shared/Label";
import MailIcon from "@/public/icons/email.svg";
import PhoneIcon from "@/public/icons/phone.svg";
import InstaIcon from "@/public/icons/socials/instagram.svg";
import LinkedinIcon from "@/public/icons/socials/linkedin.svg";
import GitHubIcon from "@/public/icons/socials/github.svg";
import TelegramIcon from "@/public/icons/socials/telegram.svg";
import { useTranslations } from 'next-intl';
import { ReactNode } from "react";

const Footer = ({ }) => {
  const t = useTranslations("HomePage.footer");
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className={classNames(styles["footer"], "footer")}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-intro"]}>
          <span><Label>{t("label")}</Label></span>
          <p>{t("text")}</p>
        </div>
        <div className={styles["footer-reach-me"]}>
          <a href="mailto:danbaranovskyi@gmail.com"><MailIcon />
            <span>danbaranovskyi@gmail.com</span>
          </a>
          <a href="tel:+380952032884"><PhoneIcon /><span>+38 095 203 28 84</span>
          </a>
        </div>
        <div className={styles["footer-socials"]}>
          <p className={styles["footer-socials-text"]}>{t("socials.text")}</p>
          <ul className={styles["footer-socials-list"]}>
            <li>
              <a href="https://www.instagram.com/danilbaranovsky/" target="_blank">
                <InstaIcon />
              </a>
            </li>
            <li><a href="https://www.linkedin.com/in/danil-baranovsky-69241721b/" target="_blank"><LinkedinIcon /></a></li>
            <li>
              <a href="https://github.com/danil-baranovskyi" target="_blank"><GitHubIcon /></a>
            </li>
            <li><a href="https://t.me/danbaranovskyi" target="_blank"><TelegramIcon /></a></li>
          </ul>
        </div>
      </div>
      <div className={styles["footer-copyright"]}>
        <p>{
          t.rich("copyright",
            {
              year,
              projectLink: (chunk) => <a href="https://github.com/danil-baranovskyi/portfolio" target="_blank">{chunk}</a>,
              heart: (chunk) => <span>{chunk}</span>
            }
          )
        }</p>
      </div>
    </footer>
  )
}

export default Footer;