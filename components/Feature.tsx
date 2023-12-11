import styles from '../app/page.module.css'
import React from "react";

export default function Feature({icon, name, description}: { icon: React.ReactNode, name: string, description: string }) {
    return (
        <div className={styles.feature}>
            {icon}
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}