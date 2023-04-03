import React from 'react';
import { classNames } from '@/utils';

import styles from './checkmarkIcon.module.css';

const CheckmarkIcon = ({
    filled,
}) => {
    const className = filled ? "material-symbols-rounded" : "material-symbols-outlined";

    return (
        <span className={className}>
            check_circle
        </span>
    );
};

export default CheckmarkIcon;