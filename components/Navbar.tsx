'use client';
import styles from '../app/page.module.css'

export default function Navbar(
    {name, elements}: { name: string, elements: { name: string, url: string }[] }
) {
    const links = elements.map((element) => {
        return <a key={element.name} href={element.url}>{element.name}</a>
    })

    return (
        <nav className={styles.nav}>
            <img src="/logo.webp" alt="Tiscord Logo"/>
            <div>{links}</div>
        </nav>
    )


}