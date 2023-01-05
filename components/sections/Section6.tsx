import Image from "next/image";
import { FC, useState, useEffect, useRef, useMemo, useCallback } from "react";
import styles from './Section6.module.css';

interface Props {

}

import {
    mail as MainIcon,
    decorateSpring1 as DecorateSpring1Icon,
    decorateSpring2 as DecorateSpring2Icon,
    telegram2 as Telegram2Icon,
    decoratePlus as DecoratePlusIcon
} from '../svgIcons'

const Section6: FC<Props> = ({ }) => {


    return (
        <div className={styles.container}>
            <span className={styles.telegramIcon}>
                <Telegram2Icon />
            </span>
            <div className={styles.content}>
                <p className={styles.description}>
                    Subscribe to get information, latest news and other interesting offers about Cobham
                </p>
                <div className={styles.inputGroup}>
                    <div className={styles.emailInput}>
                        <input className={styles.input}
                            placeholder="Your email" />
                        <span className={styles.email}>
                            <MainIcon />
                        </span>
                    </div>
                    <button className={styles.btn}>
                        Subscribe
                    </button>
                </div>
                <span className={styles.decorateSpring1}>
                    <DecorateSpring1Icon />
                </span>
                <span className={styles.decorateSpring2}>
                    <DecorateSpring2Icon />
                </span>

            </div>
            <span className={styles.decoratePlus}>
                <DecoratePlusIcon />
            </span>
        </div>
    )
};
export default Section6;
