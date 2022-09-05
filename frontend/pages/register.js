import formStyles from '../styles/Form.module.css'
import Head from "next/head";
import CommonJS from "../components/commonjs";

function doRegister() {

}

export default function Register() {

    return <>
        <div>
            <Head>
                <title>Register - WackyNotes</title>
            </Head>
            <CommonJS />
            <main>
                <div className={formStyles.form}>
                    <h1>Register</h1>
                    <p>Your Account ID: <code id={"idNumber"}>0000 0000 0000 0000</code></p>
                    <p>Your Key: <span>click to copy</span></p>
                    <a className={formStyles.arrow} href={'/'}>&larr; Back</a>
                    <button onClick={doRegister} type={"submit"}>Generate account details &rarr;</button>
                </div>
            </main>
        </div>
    </>
}