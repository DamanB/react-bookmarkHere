import React from 'react';
import { classNames } from '@/utils';

import styles from './bookmarkIcon.module.css';

const BookmarkIcon = ({
    filled,
}) => {
    const className = filled ? "material-symbols-rounded" : "material-symbols-outlined";

    return (
        <span className={className}>
            bookmark
        </span>
    );
};

export default BookmarkIcon;