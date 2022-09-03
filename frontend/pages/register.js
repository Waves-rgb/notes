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
                    <a className={formStyles.arrow} href={'/'}>&larr; Back</a>
                    <button onClick={doRegister} type={"submit"}>Generate account details &rarr;</button>
                </div>
            </main>
        </div>
    </>
}