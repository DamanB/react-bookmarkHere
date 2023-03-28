import React from 'react';
import { classNames } from '@/utils';
import styles from './logo.module.css';

const Logo = (props) => {
    const { isForNavbar } = props;
    const muiLogo = "material-symbols-outlined";

    return (
        <>
            {isForNavbar && (
                <span className={classNames([muiLogo, styles.navbar])}>
                    book
                </span>
            )}

            {/* Default */}
            {!isForNavbar && (
                <span className={classNames([muiLogo])}>
                    book
                </span>
            )}

        </>
    );
};

export default Logo;