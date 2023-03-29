import React from 'react';
import styles from './navbar.module.css';
import utilStyles from '@/styles/utils.module.css';
import { classNames } from '@/utils.js';
import RainbowFooter from '@/components/rainbowFooter';
import Logo from '@/components/logo';

const Navbar = () => {
    return (
        <>
            <div className={classNames([styles.container])}>
                <div className={classNames([styles.contentContainer, utilStyles.ftLight])}>
                    <div className={styles.logo}>
                        <Logo isForNavbar />
                    </div>
                    <span className={classNames([styles.title, utilStyles.ftLight])}>Bookmark Here!</span>
                </div>
                <RainbowFooter />
            </div>
            <div className={styles.spacer} />        
        </>
    );
};

export default Navbar;