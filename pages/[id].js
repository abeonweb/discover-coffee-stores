import React from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";



const Nollywood = () => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{router.query.id}</title>
            </Head>

            <p>Welcome to {router.query.id}</p>
        </div>
    )
}

export default Nollywood

export async function getStaticProps() {
    return {
        props: {

        }
    }
}

export async function getStaticPaths() {
    return {
        props: {

        }
    }
}