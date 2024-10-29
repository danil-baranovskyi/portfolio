import classNames from "classnames";
import styles from "./styles.module.scss";
import Label from "@/app/components/shared/Label";
import MailIcon from "@/public/icons/email.svg";
import PhoneIcon from "@/public/icons/phone.svg";
import InstaIcon from "@/public/icons/socials/instagram.svg";
import LinkedinIcon from "@/public/icons/socials/linkedin.svg";
import GitHubIcon from "@/public/icons/socials/github.svg";
import TelegramIcon from "@/public/icons/socials/telegram.svg";

const Footer = ({ }) => {
  return (
    <footer className={classNames(styles["footer"], "footer")}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-intro"]}>
          <span><Label>Get in touch</Label></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aut omnis, tempore, ullam aliquam accusantium minima, ea corrupti fuga nostrum rerum asperiores nemo repudiandae accusamus nesciunt unde vero numquam? &copy;</p>
        </div>
        <div className={styles["footer-reach-me"]}>
          <a><MailIcon /><span>danbaranovskyi@gmail.com</span>
          </a>
          <a><PhoneIcon /><span>+38 095 203 28 84</span>
          </a>
        </div>
        <div className={styles["footer-socials"]}>
          <p className={styles["footer-socials-text"]}>You may also find me on this platforms</p>
          <ul className={styles["footer-socials-list"]}>
            <li>
              <a href="https://www.instagram.com/danilbaranovsky/" target="_blank">
                <InstaIcon />
              </a>
            </li>
            <li><a href="https://www.linkedin.com/in/danil-baranovsky-69241721b/" target="_blank"><LinkedinIcon /></a></li>
            <li><a href="https://github.com/danil-baranovskyi" target="_blank"><GitHubIcon /></a></li>
            <li><a href="https://t.me/danbaranovskyi" target="_blank"><TelegramIcon /></a></li>
          </ul>
        </div>
      </div>
      <div className={styles["footer-copyright"]}>
        <p>© 2024 | <a>Made</a> with <span>♥</span> by Danylo Baranovskyi</p>
      </div>
    </footer>
  )
}

export default Footer;