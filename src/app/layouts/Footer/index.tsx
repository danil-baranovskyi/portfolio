import classNames from "classnames";
import styles from "./styles.module.scss";
import Label from "@/app/components/shared/Label";
import MailIcon from "@/public/icons/email.svg";
import PhoneIcon from "@/public/icons/phone.svg";
import CopyIcon from "@/public/icons/copy.svg";
import InstaIcon from "@/public/icons/instagram.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import GitHubIcon from "@/public/icons/github.svg";

const Footer = ({ }) => {
  return (
    <footer className={classNames(styles["footer"], "footer")}>
      <div className={styles["footer-container"]}>
        <div>
          <div><Label>Get in touch</Label></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur aut omnis, tempore, ullam aliquam accusantium minima, ea corrupti fuga nostrum rerum asperiores nemo repudiandae accusamus nesciunt unde vero numquam? &copy;</p>
        </div>
        <div className={styles["footer-reach-me"]}>
          <a><MailIcon />danbaranovskyi@gmail.com<CopyIcon /></a>
          <a><PhoneIcon />+38 095 203 28 84<CopyIcon /></a>
        </div>
        <div className={styles["footer-socials"]}>
          <p>You may also find me on this platforms</p>
          <a><InstaIcon /></a>
          <a><LinkedinIcon /></a>
          <a><GitHubIcon /></a>
        </div>
      </div>
      <div className={styles["footer-copyright"]}>
        <p>© 2024 | <a>Made</a> with <span>♥</span> by Danylo Baranovskyi</p>
      </div>
    </footer>
  )
}

export default Footer;