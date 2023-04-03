import React, { useEffect, useState } from 'react';
import { classNames } from '@/utils';

import styles from './filterIcon.module.css';

const FilterIcon = ({
    classes=[],
    selected: selectedFromProps,
    Icon,
}) => {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(selectedFromProps)
    }, [selectedFromProps])

    return (
            <div
                className={classNames([styles.container, ...classes])}
                onClick={() => setIsSelected(!isSelected)}
            >
                {!isSelected && (
                    <Icon/>
                )}

                {isSelected && (
                    <Icon filled/>
                )}
            </div>
    );
};

export default FilterIcon;