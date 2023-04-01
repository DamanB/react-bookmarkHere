import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Auth from '@/views/auth';

import styles from './app.module.css';

const App = () => {

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Auth />
                <Footer />
            </div>
        </>
    );
};

export default App;