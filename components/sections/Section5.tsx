import Image from "next/image";
import { FC, useState, useEffect, useRef, useMemo, useCallback } from "react";
import styles from './Section5.module.css';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

import {
    BottomSlideArrowIcon,
    UpSlideArrowIcon
} from '../svgIcons'

interface Props {

}

interface SlideItemType {
    avatar: string,
    description: string,
    author: string,
    location: string
}
const SlideData: SlideItemType[] = [
    {
        avatar: "/imgs/avatar1.png",
        description: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        author: "Mike taylor",
        location: "Lahore, Pakistan"
    },
    {
        avatar: "/imgs/avatar1.png",
        description: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        author: "chris thomas",
        location: "CEO of Red Button"
    },
    {
        avatar: "/imgs/avatar1.png",
        description: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        author: "Mike taylor",
        location: "Lahore, Pakistan"
    }
]
const Section5: FC<Props> = ({ }) => {

    const [currentSlidePosition, setCurrentSlidePosition] = useState(0)

    const handlePrevSlide = () => {
        if (currentSlidePosition > 0) {
            setCurrentSlidePosition(currentSlidePosition - 1)
        }
    }

    const handleNextSlide = () => {
        if (currentSlidePosition < SlideData.length - 1) {
            setCurrentSlidePosition(currentSlidePosition + 1)
        }
    }

    return (
        <div className={styles.container}>



            <div className={styles.titlePanel}>
                <p className={styles.head}>
                    testominals
                </p>
                <h2 className={styles.title}>
                    what people say about us
                </h2>
                <div className={styles.navigationPanel}>
                    {
                        SlideData.map((_, index) => {
                            return (
                                <span className={`${styles.navigationItem} ${index == currentSlidePosition && styles.activeNavigationItem}`} key={index}>
                                </span>
                            )
                        })
                    }

                </div>
            </div>
            <div className={styles.slidePanel}>
                {
                    SlideData.map((slideItem, index) => {
                        return (
                            <div key={index} className={`${styles.slideItem} ${currentSlidePosition == index && styles.activeSlide} ${currentSlidePosition + 1 == index && styles.preShowSlide}`}>
                                <span className={styles.avatar}>
                                    <Image
                                        src={slideItem.avatar}
                                        width={68}
                                        height={68}
                                        alt=""
                                    />
                                </span>
                                <p className={styles.description}>
                                    {slideItem.description}
                                </p>
                                <div>
                                    <p className={styles.author}>
                                        {
                                            slideItem.author
                                        }
                                    </p>
                                    <p className={styles.location}>
                                        {
                                            slideItem.location
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <div className={styles.arrowPanel}>
                    <span className={styles.arrowWrapper} onClick={handlePrevSlide}>
                        <UpSlideArrowIcon active={currentSlidePosition > 0} />
                    </span>
                    <span className={styles.arrowWrapper} onClick={handleNextSlide}>
                        <BottomSlideArrowIcon active={currentSlidePosition < SlideData.length - 1} />
                    </span>
                </div>
            </div>




        </div>
    )
};
export default Section5;
