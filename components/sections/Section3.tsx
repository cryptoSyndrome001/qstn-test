import Image from "next/image";
import { FC, useState, useEffect, useRef, useMemo, useCallback } from "react";
import styles from './Section3.module.css';


import {
    play as PlayIcon,
    plusGroup as PlusGroupIcon,
    sectionItemHover as SectionItemHoverImage,
    arrow as TelegramIcon
} from '../svgIcons'

interface Section3Props {

}
const Section3: FC<Section3Props> = ({ }) => {

    return (
        <div className={styles.container}>
            <p className={styles.head}>
                top selling
            </p>
            <h2 className={styles.title}>
                top destinations
            </h2>
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <div className={styles.item}>
                        <div className={styles.cardImgWrapper}>
                            <Image
                                src={'/imgs/card1.png'}
                                width={314}
                                height={332}
                                alt=""
                                className={styles.cardImg}
                            />
                        </div>
                        <div className={styles.textPanel}>
                            <div className={styles.panel1}>
                                <span>
                                    rome, italy
                                </span>
                                <span>
                                    $ 5,42k
                                </span>
                            </div>
                            <div className={styles.panel2}>
                                <span >
                                    <TelegramIcon />
                                </span>
                                10 Days Trip
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.cardImgWrapper}>
                            <Image
                                src={'/imgs/card2.png'}
                                width={314}
                                height={332}
                                alt=""
                                className={styles.cardImg}
                            />
                        </div>
                        <div className={styles.textPanel}>
                            <div className={styles.panel1}>
                                <span>
                                    london, uk
                                </span>
                                <span>
                                    $ 4.2k
                                </span>
                            </div>
                            <div className={styles.panel2}>
                                <span >
                                    <TelegramIcon />
                                </span>
                                12 Days Trip
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.cardImgWrapper}>
                            <Image
                                src={'/imgs/card3.png'}
                                width={314}
                                height={332}
                                alt=""
                                className={styles.cardImg}
                            />
                        </div>
                        <div className={styles.textPanel}>
                            <div className={styles.panel1}>
                                <span>
                                    full europe
                                </span>
                                <span>
                                    $ 15k
                                </span>
                            </div>
                            <div className={styles.panel2}>
                                <span >
                                    <TelegramIcon />
                                </span>
                                28 Days Trip
                            </div>
                        </div>
                    </div>
                </div>
                <span className={styles.springImgWrapper}>
                    <Image
                        src={'/imgs/spring.png'}
                        width={96}
                        height={252}
                        alt=""
                        className={styles.springImg}
                    />
                </span>
            </div>

        </div>
    )
};
export default Section3;
