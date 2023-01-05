import { FC, useState, useEffect, useRef, useMemo, useCallback } from "react";
import styles from './Topbar.module.css'
import {
    logo as LogoIcon,
    bottomArrow as BottomArrowIcon
} from '../svgIcons'
interface TopbarProps {

}
const Topbar: FC<TopbarProps> = ({ }) => {

    return (
        <div className={styles.contianer}>
            <span className={styles.logo}>
                <LogoIcon />
            </span>
            <div className={styles.topMenuContainer}>
                <span className={styles.menuItem}>
                    destinations
                </span>
                <span className={styles.menuItem}>
                    hotels
                </span>
                <span className={styles.menuItem}>
                    flights
                </span>
                <span className={styles.menuItem}>
                    bookings
                </span>
                <span className={styles.menuItem}>
                    login
                </span>
                <span className={`${styles.menuItem} ${styles.btnBorder}`}>
                    signup
                </span>
                <span className={styles.menuItem}>
                    en
                    <span className={styles.arrowIcon}>
                        <BottomArrowIcon />
                    </span>
                </span>
            </div>
        </div>
    )
};
export default Topbar;
