import Image from "next/image";
import { FC, useState, useEffect, useRef, useMemo, useCallback } from "react";
import styles from './Section4.module.css';


import {
    play as PlayIcon,
    plusGroup as PlusGroupIcon,
    sectionItemHover as SectionItemHoverImage,
    arrow as ArrowIcon,
    section4ListIcon1 as SectionListIcon1,
    section4ListIcon2 as SectionListIcon2,
    section4ListIcon3 as SectionListIcon3,
    leaf as LeafIcon,
    map as MapIcon,
    telegram as TelegramIcon,
    building as BuildingIcon,
    heart as HeartIcon
} from '../svgIcons'

interface Props {

}
const Section4: FC<Props> = ({ }) => {

    return (
        <div className={styles.container}>
            <div className={styles.textPanel}>
                <p className={styles.head}>
                    Easy and Fast
                </p>
                <h2 className={styles.title}>
                    Book your next trip in 3 easy steps
                </h2>
                <div className={styles.listItem}>
                    <div className={styles.iconWrapper}>
                        <SectionListIcon1 />
                    </div>
                    <div className={styles.textContent}>
                        <p className={styles.itemTitle}>
                            Choose Destination
                        </p>
                        <p className={styles.itemDescription}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Urna, tortor tempus.
                        </p>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <div className={styles.iconWrapper}>
                        <SectionListIcon2 />
                    </div>
                    <div className={styles.textContent}>
                        <p className={styles.itemTitle}>
                            Make Payment
                        </p>
                        <p className={styles.itemDescription}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Urna, tortor tempus.
                        </p>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <div className={styles.iconWrapper}>
                        <SectionListIcon3 />
                    </div>
                    <div className={styles.textContent}>
                        <p className={styles.itemTitle}>
                            Reach Airport on Selected Date
                        </p>
                        <p className={styles.itemDescription}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Urna, tortor tempus.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.imgPanel}>
                <div className={styles.mainCard}>
                    <div className={styles.girlImgWrapper}>
                        <Image
                            src={'/imgs/girl.png'}
                            width={321}
                            height={161}
                            alt=""
                            className={styles.girlImg}
                        />
                    </div>
                    <p className={styles.cardTitle}>
                        trip to greece
                    </p>
                    <p className={styles.cardDescription1}>
                        14-29 June | by Robbin joseph
                    </p>
                    <div className={styles.cardIconsGroup}>
                        <span className={styles.cardIcon}>
                            <LeafIcon />
                        </span>
                        <span className={styles.cardIcon}>
                            <MapIcon />
                        </span>
                        <span className={styles.cardIcon}>
                            <TelegramIcon />
                        </span>
                    </div>
                    <div className={styles.cardDescrption2Panel}>
                        <div className={styles.cardDescription2}>
                            <span className={styles.buildingIcon}>
                                <BuildingIcon />
                            </span>
                            24 people going
                        </div>
                        <span className={styles.heartIcon}>
                            <HeartIcon />
                        </span>
                    </div>
                </div>
                <div className={styles.popupCard}>
                    <span className={styles.subLogoWrapper}>
                        <Image
                            src={'/imgs/section4-subLogo.png'}

                            alt=""
                            width={50}
                            height={50}
                        />
                    </span>
                    <div className={styles.subDescriptionPanel}>
                        <p className={styles.subHead}>
                            ongoing
                        </p>
                        <h2 className={styles.subTitle}>
                            trip to rome
                        </h2>
                        <div className={styles.subDescription}>
                            <span className={styles.percentage}>
                                40%
                            </span>
                            completed
                        </div>
                        <div className={styles.progressBar}>
                            <div className={styles.filled} style={{ width: "40%" }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Section4;
