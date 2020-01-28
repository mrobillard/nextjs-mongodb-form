import React from 'react';
import Head from 'next/head';

import Main from '../components/Main';
import RegisterForm from '../components/RegisterForm';

const IndexPage = () => {

    return (
        <>
            <Head>
                <title>Next.js + MongoDB Form</title>
            </Head>
            <RegisterForm />
        </>
    );
}

export default IndexPage;