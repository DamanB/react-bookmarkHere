import React from 'react';
import styles from './input.module.css';

import { classNames } from '@/utils.js';

const Input = (props) => {
     const {
        error, 
        id,
        InputComponent,
        inputProps = {},
        label,
        required,
     } = props;

    return (
        <div className={classNames([styles.container])}> 
            <label htmlFor={id} >
                <span>{label} {required && '*'}</span>
            </label>
            {InputComponent && <InputComponent {...inputProps} id={id} />}
            <div>
                <span className={styles.error}>{error}</span>
            </div>
        </div>
    );
};

export default Input;