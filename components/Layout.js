import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({children, title}){
    return (
        <>
            <Head>
                <title>{title} | Sihle Kambula</title>
            </Head>

            <div>
                {/* <Navbar/> */}
                {children}
            </div>
        </>
    )
}