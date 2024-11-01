'use client';

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

const CvBtn = () => {
  const t = useTranslations('HomePage.nav');
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/CV – Danil Baranovsky.pdf'; // Replace with your file URL
    link.download = 'CV – Danil Baranovsky.pdf'; // The downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <button className={styles['download-cv']} onClick={handleDownload}>{t("downloadCv")}</button>
  )
}

export default CvBtn;