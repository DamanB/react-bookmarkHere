import React, { useEffect, useState } from 'react';

import styles from './filterIcon.module.css';

const FilterIcon = ({
    selected: selectedFromProps,
    Icon,
}) => {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(selectedFromProps)
    }, [selectedFromProps])

    return (
        <>
            <div
                className={styles.container}
                onClick={() => setIsSelected(!isSelected)}
            >
                {!isSelected && (
                    <Icon/>
                )}

                {isSelected && (
                    <Icon filled/>
                )}
            </div>
        </>
    );
};

export default FilterIcon;