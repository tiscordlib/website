'use client';
import styles from '../app/page.module.css'
import Image from "next/image";

export default function Navbar(
    {name, elements}: { name: string, elements: { name: string, url: string }[] }
) {
    const links = elements.map((element) => {
        return <a key={element.name} href={element.url}>{element.name}</a>
    })

    return (
        <nav className={styles.nav}>
            <Image src={"/logo.webp"} alt={"Tiscord logo"} />
            <div>{links}</div>
        </nav>
    )


}