'use client';

import Command from "@/components/Command";
import Codeblock from "@/components/Codeblock";
import styles from '../app/page.module.css'

export default function Header({description}: { description: string }) {
    return (
        <div>
            <header className={styles.header}>
                <section>
                    <div></div>
                    <h1 className={styles.headertitle}> Tiscord </h1>
                    <p>{description}</p>
                    <Command text="npm i tiscord"></Command>
                </section>
                <Codeblock/>
                <div className={styles.bg}></div>
            </header>
        </div>
    )
}