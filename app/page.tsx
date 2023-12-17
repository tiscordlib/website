import styles from './page.module.css'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Features from "@/components/Features";

export default function Home() {


    return (
        <>
            <div className={styles.app}>
                <Navbar
                    name="Tiscord"
                    elements={[
                        {name: 'Docs', url: '/docs'},
                        {name: 'Github', url: 'https://github.com/tiscordlib/tiscord'}
                    ]}
                />
                <Header description="A fast, object-oriented Discord API wrapper."/>
                <section className={styles.bottom}>
                    <h1> Reasons to use Tiscord</h1>
                    <Features/>
                </section>

            </div>
        </>
    )
}
