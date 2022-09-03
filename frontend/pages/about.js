import styles from "../styles/About.module.css";

export default function about() {
    return <>
        <div>
            <main className={styles.main}>
                <a href={"/"} className={styles.back}>&larr; Back</a>
                <h1 className={styles.section}>About</h1>
                <hr />
                <div className={styles.textContainer}>
                    <p>
                        WackNotes is a secure, privacy-oriented, web-based, open-source note taking app,
                        made out of pure boredom, built with <a href={"https://nextjs.org"}>Next.js</a>, <a href={"https://reactjs.org/"}>React</a>, and <a href={"https://nodejs.org/"}>Node.js</a>.
                        Still being polished.
                        <br/>
                        <br/>
                        The privacy is ensured due to the nature of the apps account system. The account system uses
                        no personal information and simply contain a 16 digit ID code (eg. <code>6001 0589 3872 0693</code>) paired with a 32
                        character encryption/decryption key, containing both uppercase, lowercase, special, and numeric characters.
                        Both the ID and the key are generated randomly to prevent any vulnerability from poor passwords. The ID is used to
                        identify the user, and the key is used to encrypt and decrypt the notes.
                        <br/>
                        <br/>
                        The security aspect comes from the various encryption methods used to encrypt, decrypt, and store data.
                        <a href={"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"}>AES-256-CBC</a> is used for encrypting the notes,
                        and the encryption key is hashed with <a href={"https://en.wikipedia.org/wiki/PBKDF2"}>PBKDF2 </a>
                        and only accessed to verify the decryption key upon login. The key is
                        salted with a 128 character salt. The salt, hash, and ID are the only things stored in the database, other than the users encrypted notes.
                        All encryption and decryption is done on the client side. The server is simply an intermediary between the client and the database.
                        <br/>
                        <br/>
                        WackNotes is completely free open-source software that can be found on <a href={"https://github.com/waves-rgb/notes"}>GitHub</a>.
                    </p>
                </div>
                {/*<h1 className={styles.section}>Features</h1>*/}
                {/*<hr />*/}
            </main>
        </div>
    </>
}