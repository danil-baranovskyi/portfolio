"use client";

import classNames from "classnames";
import styles from "./styles.module.scss";
import SideBar from "../SideBar";
import { useCallback, useState } from "react";
import ClientOnlyPortal from "@/app/components/shared/ClientOnlyPortal.tsx";

const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = useCallback(() => {
    setIsActive(state => !state);
  }, []);

  return (
    <div className={classNames(styles['burger'], {[styles['burger--active']]: isActive})}>
      <button className={styles['burger-btn']} onClick={handleIsActive}>
        <span className={classNames(styles['burger-line'], styles['first'])}></span>
        <span className={classNames(styles['burger-line'], styles['second'])}></span>
        <span className={classNames(styles['burger-line'], styles['third'])}></span>
      </button>
      <ClientOnlyPortal selector={'.header'}>
        <SideBar isActive={isActive} />
      </ClientOnlyPortal>
    </div>
  )
}

export default Burger;