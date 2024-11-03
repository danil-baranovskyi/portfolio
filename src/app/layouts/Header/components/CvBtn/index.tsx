'use client';

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { FC } from "react";

interface ICvBtnProps {
  text: string;
}

const CvBtn: FC<ICvBtnProps> = ({text}) => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/CV – Danil Baranovsky.pdf'; // Replace with your file URL
    link.download = 'CV – Danil Baranovsky.pdf'; // The downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <button className={styles['download-cv']} onClick={handleDownload}>{text}</button>
  )
}

export default CvBtn;