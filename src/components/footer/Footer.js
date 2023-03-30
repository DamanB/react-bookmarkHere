import React from 'react';
import styles from './footer.module.css';
import utilStyles from '@/styles/utils.module.css';
import { classNames } from '@/utils.js';

import Card from '@/components/card';
import Logo from '@/components/logo';

const Navbar = () => {
    return (
        <Card hideFooter>
            <div className={styles.container}>
                <div className={styles.containerLogo}>
                    <Logo />
                </div>
                <div className={styles.containerText}>
                    <span className={styles.small}>Produced By</span>
                    <span className={styles.large}>WebX Developer</span>
                </div>
            </div>
        </Card>
    );
};

export default Navbar;