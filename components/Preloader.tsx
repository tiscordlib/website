'use client';

import styles from '../app/page.module.css'
import {useEffect} from "react";
import $ from "jquery";
export default function Preloader() {
    useEffect(() => {
        // Wyłączanie paska przewijania
        document.documentElement.style.overflow = 'hidden';
        $(`.${styles.preloader}`).delay(20).fadeOut(1000);
        setTimeout(() => {
            // Włączanie paska przewijania
            document.documentElement.style.overflow = 'auto';
        }, 1000);

    }, []);

    console.log(`${styles.preloader}`)


    return (
        <div className={styles.preloader}>
            <div className={styles.preloaderinner}>
                <img src="/logo.webp" alt="Tiscord Logo"/>
            </div>
        </div>
    )
}