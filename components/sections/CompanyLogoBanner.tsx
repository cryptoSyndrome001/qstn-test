import Image from "next/image";
import { FC, useState, useEffect, useRef, useMemo, useCallback } from "react";
import styles from './CompanyLogoBanner.module.css';

interface Props {

}

const CompanyLogoBanner: FC<Props> = ({ }) => {


    return (
        <div className={styles.container}>
            <Image
                src={'/imgs/company-logo1.png'}
                width={240}
                height={85}
                alt=""
                className={styles.img}
            />
            <Image
                src={'/imgs/company-logo2.png'}
                width={240}
                height={85}
                alt=""
                className={styles.img}
            />
            <Image
                src={'/imgs/company-logo3.png'}
                width={240}
                height={85}
                alt=""
                className={styles.img}
            />
            <Image
                src={'/imgs/company-logo4.png'}
                width={240}
                height={85}
                alt=""
                className={styles.img}
            />
            <Image
                src={'/imgs/company-logo5.png'}
                width={240}
                height={85}
                alt=""
                className={styles.img}
            />
        </div>
    )
};
export default CompanyLogoBanner;
