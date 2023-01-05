import Image from "next/legacy/image";
import { FC, useState, useEffect, useRef, useMemo, useCallback } from "react";
import styles from './Section1.module.css';

import {
    play as PlayIcon
} from '../svgIcons'

interface Section1Props {

}
const Section1: FC<Section1Props> = ({ }) => {

    return (
        <div className={styles.contianer}>

            <div className={styles.textPanel}>
                <p className={styles.title}>
                    best destinations around the world
                </p>
                <div className={styles.text}>
                    Travel, enjoy and live a new and full life
                    <span
                        className={styles.textDecoration}>

                        <Image
                            src={'/imgs/textDecoration.png'}
                            alt=""
                            width={372}
                            height={12}
                            layout="fill"
                        />
                    </span>

                </div>
                <p className={styles.description}>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </p>
                <div className={styles.buttonGroup}>
                    <button className={styles.btn1}>
                        Find out more
                    </button>
                    <button className={styles.btn2}>
                        <span className={styles.playIcon}>
                            <PlayIcon />
                        </span>
                        play demo
                    </button>
                </div>
            </div>

            {/* <Image
                    src={"/imgs/traveller.png"}
                    objectFit="cover"
                    alt="Traveller"
                    layout="fill"
                /> */}
            <div className={styles.travellerImgWrapper}>
                <Image
                    src={"/imgs/traveller.png"}
                    width={780}
                    height={764}
                    layout="intrinsic"
                    alt="Traveller"
                    className={styles.travellerImg}
                />
            </div>


        </div>
    )
};
export default Section1;
