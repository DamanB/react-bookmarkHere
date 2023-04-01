import React from 'react';
import styles from './card.module.css';

import { classNames } from '@/utils.js';

import RainbowFooter from '@/components/rainbowFooter';

const Card = ({ 
    children, 
    hideFooter,
    hideTopRadius
}) => {

    const classes = [hideTopRadius && styles.hideTopRadius]

    return (
        <div className={classNames([styles.container, ...classes])}> 
            {children}
            {!hideFooter && <RainbowFooter />}
        </div>
    );
};

export default Card;