import Image from "next/image";
import { FC, useState, useEffect, useRef, useMemo, useCallback } from "react";
import styles from './Section2.module.css';


import {
    play as PlayIcon,
    plusGroup as PlusGroupIcon,
    sectionItemHover as SectionItemHoverImage
} from '../svgIcons'

interface Section2Props {

}
const Section2: FC<Section2Props> = ({ }) => {

    return (
        <div className={styles.contianer}>
            <p className={styles.head}>
                CATEGORY
            </p>
            <h2 className={styles.title}>
                We Offer Best Services
            </h2>
            <div className={styles.content}>
                <div className={styles.contentItemWrapper}>
                    <div className={styles.contentItem}>
                        <Image
                            src={'/imgs/section2-1.png'}
                            alt="img"
                            width={92}
                            height={87}
                            layout="intrinsic"
                            className={styles.itemImg}
                        />
                        <p className={styles.itemTitle}>
                            Calculated Weather
                        </p>
                        <p className={styles.itemDescription}>
                            Built Wicket longer admire do barton vanity itself do in it.
                        </p>
                    </div>
                    <span className={styles.hoverImg}>
                        <SectionItemHoverImage />
                    </span>
                </div>
                <div className={styles.contentItemWrapper}>
                    <div className={styles.contentItem}>
                        <Image
                            src={'/imgs/section2-2.png'}
                            alt="img"
                            width={92}
                            height={87}
                            layout="intrinsic"
                            className={styles.itemImg}
                        />
                        <p className={styles.itemTitle}>
                            Best Flights
                        </p>
                        <p className={styles.itemDescription}>
                            Engrossed listening. Park gate sell they west hard for the.
                        </p>
                    </div>
                    <span className={styles.hoverImg}>
                        <SectionItemHoverImage />
                    </span>
                </div>
                <div className={styles.contentItemWrapper}>
                    <div className={styles.contentItem}>
                        <Image
                            src={'/imgs/section2-3.png'}
                            alt="img"
                            width={92}
                            height={87}
                            layout="intrinsic"
                            className={styles.itemImg}
                        />
                        <p className={styles.itemTitle}>
                            Local Events
                        </p>
                        <p className={styles.itemDescription}>
                            Barton vanity itself do in it. Preferd to men it engrossed listening.
                        </p>
                    </div>
                    <span className={styles.hoverImg}>
                        <SectionItemHoverImage />
                    </span>
                </div>
                <div className={styles.contentItemWrapper}>
                    <div className={styles.contentItem}>
                        <Image
                            src={'/imgs/section2-4.png'}
                            alt="img"
                            width={92}
                            height={87}
                            layout="intrinsic"
                            className={styles.itemImg}
                        />
                        <p className={styles.itemTitle}>
                            Customization
                        </p>
                        <p className={styles.itemDescription}>
                            We deliver outsourced aviation services for military customers
                        </p>
                    </div>
                    <span className={styles.hoverImg}>
                        <SectionItemHoverImage />
                    </span>
                </div>
            </div>
            <span className={styles.plusGroup}>
                <PlusGroupIcon />
            </span>

        </div>
    )
};
export default Section2;
