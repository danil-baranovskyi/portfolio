'use client';

import styles from "./styles.module.scss";

const CvBtn = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/CV – Danil Baranovsky.pdf'; // Replace with your file URL
    link.download = 'CV – Danil Baranovsky.pdf'; // The downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <button className={styles['download-cv']} onClick={handleDownload}>Download cv</button>
  )
}

export default CvBtn;