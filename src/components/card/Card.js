import React from 'react';
import styles from './card.module.css';

import { classNames } from '@/utils.js';

import RainbowFooter from '@/components/rainbowFooter';

const Card = ({ 
    children, 
}) => {

    return (
        <div className={classNames([styles.container])}> 
            {children}
            <RainbowFooter />
        </div>
    );
};

export default Card;