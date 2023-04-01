import React from 'react';
import styles from './inputText.module.css';

import { classNames } from '@/utils.js';

const InputText = (props) => {
     const {
        id,
        placeholder,
        type = 'text',
        ...rest
     } = props;

    return (
        <div className={classNames([styles.container])}> 
            <input 
                type={type} 
                id={id} 
                name={id}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    );
};

export default InputText;