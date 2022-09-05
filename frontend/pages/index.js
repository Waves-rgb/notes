import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>WackNotes</title>
                <meta name="description" content="Take notes while knowing your data is secure." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    WackNotes
                    <hr />
                </h1>
                <p className={styles.description}>
                    A secure, privacy-oriented, web-based note taking app.
                </p>
                <div className={styles.grid}>
                    <a href="/login" className={styles.card}>
                        <h3>Login &rarr;</h3>
                        <p>Log in to your account.</p>
                    </a>
                    <a href="/register" className={styles.card}>
                        <h3>Register &rarr;</h3>
                        <p>Register for an account.</p>
                    </a>
                    <a href={"/about"} className={styles.card}>
                        <h3>About &rarr;</h3>
                        <p>Learn more.</p>
                    </a>
                </div>
            </main>
        </div>
    )
}
