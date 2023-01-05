import Image from "next/image";
import { FC, useState, useEffect, useRef, useMemo, useCallback } from "react";
import styles from './Footer.module.css';

interface Props {

}

import {
    facebook as FacebookIcon,
    instagram as InstagramIcon,
    twitter as TwitterIcon,
    googlePlay as GooglePlayIcon,
    apple as AppleIcon
} from '../svgIcons'

const Footer: FC<Props> = ({ }) => {


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <span className={styles.logoText}>
                        Jadoo.
                    </span>
                    <span className={styles.subDescription}>
                        Book your trip in minute, get full Control for much longer.
                    </span>
                </div>
                <div className={styles.column}>
                    <p className={styles.menuTitle}>
                        company
                    </p>
                    <span className={styles.menuItem}>
                        about
                    </span>
                    <span className={styles.menuItem}>
                        careers
                    </span>
                    <span className={styles.menuItem}>
                        mobile
                    </span>
                </div>
                <div className={styles.column}>
                    <p className={styles.menuTitle}>
                        contact
                    </p>
                    <span className={styles.menuItem}>
                        about
                    </span>
                    <span className={styles.menuItem}>
                        careers
                    </span>
                    <span className={styles.menuItem}>
                        mobile
                    </span>
                </div>
                <div className={styles.column}>
                    <p className={styles.menuTitle}>
                        more
                    </p>
                    <span className={styles.menuItem}>
                        about
                    </span>
                    <span className={styles.menuItem}>
                        careers
                    </span>
                    <span className={styles.menuItem}>
                        mobile
                    </span>
                </div>
                <div className={styles.column}>
                    <div className={styles.iconGroup}>
                        <span className={styles.icon}>
                            <FacebookIcon />
                        </span>
                        <span className={`${styles.icon} ${styles.instgramIcon}`}>
                            <InstagramIcon />
                        </span>
                        <span className={styles.icon}>
                            <TwitterIcon />
                        </span>
                    </div>
                    <p className={styles.iconDescription}>
                        Discover our app
                    </p>
                    <div className={styles.btnGroup}>
                        <span className={styles.btn}>

                            <GooglePlayIcon />

                        </span>
                        <span className={styles.btn}>

                            <AppleIcon />

                        </span>
                    </div>
                </div>

            </div>
            <p className={styles.description}>
                All rights reserved@jadoo.co
            </p>
        </div>
    )
};
export default Footer;
