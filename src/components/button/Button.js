import React from 'react';
import styles from './button.module.css';

const Button = ({ 
    id,
    label,
    type = 'button',
    onClick,
    ...rest
}) => {

    return (
        <button 
            className={styles.button}
            name={id} 
            type={type} 
            onClick={onClick} 
            {...rest}
        >
            {label}
        </button>
    );
};

export default Button;