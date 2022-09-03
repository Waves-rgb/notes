import CommonJS from "../components/commonjs";
import formStyles from "../styles/Form.module.css"
import Head from "next/head";

function doLogin() {
    // console.log("doLogin");
}

function keydown() {
    // const id = $('#id')
    //
    // if (id.val().length % 5 === 0) {
    //     id.val().pop();
    //     id.val += ' ' + e.charCode
    // }
}

export default function Login() {
    return <>
        <div>
            <Head>
                <title>Login - WackyNotes</title>
            </Head>
            <CommonJS />
            <main>
                <div className={formStyles.form}>
                    <h1>Login</h1>
                    <a className={formStyles.arrow} href={'/'}>&larr; Back</a>
                    <input onKeyDown={keydown} id="id" name="id" placeholder="ID" />
                    <input type="password" id="password" name="key" placeholder="Decryption Key" />
                    <button type="submit" onClick={doLogin}>Submit &rarr;</button>
                </div>
            </main>
        </div>
    </>
}
