import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import ControlPanel from './components/controlPanel';

import styles from './dashboard.module.css';

const Dashboard = () => {

    return (
        <>
            <Navbar />
            <ControlPanel />
            <div className={styles.container}>
                <Footer />
            </div>
        </>
    );
};

export default Dashboard;