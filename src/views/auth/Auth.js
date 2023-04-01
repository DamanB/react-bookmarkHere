import React from 'react';
import Card from '@/components/card';
import Input from '@/components/inputs/input';
import InputText from '@/components/inputs/inputText';
import Button from '@/components/button';

import styles from './auth.module.css';
import utilStyles from '@/styles/utils.module.css';
import { classNames } from '@/utils';


const Auth = () => {

    return (
        <div className={styles.container}>
            <Card>
                <div className={styles.contentContainer}>
                    <span className={classNames([styles.h1, styles.item])}>Login!</span>
                    <div className={styles.item}>
                        <Input 
                            id="loginEmail"
                            label="Email:"
                            InputComponent={InputText}
                            inputProps={{
                                type: 'email',
                            }}
                        />
                    </div>
                    <div className={styles.item}>
                        <Input 
                            id="loginPassword"
                            label="Password:"
                            InputComponent={InputText}
                        />
                    </div>
                    <div className={classNames([styles.item, styles.authButton])}>
                        <Button id='loginButton' label='Login!' onClick={() => {}}/>
                    </div>
                </div>
            </Card>
            <Card>
                <div className={styles.contentContainer}>
                    <span className={classNames([styles.h1, styles.item])}>Join Here!</span>
                    <div className={styles.spaciousItem}>
                        <Input 
                            id="joinEmail"
                            label="Email:"
                            error="An email is required"
                            InputComponent={InputText}
                            inputProps={{
                                type: 'email',
                            }}
                            required
                        />
                    </div>
                    <div className={styles.spaciousItem}>
                        <Input 
                            id="joinUsername"
                            label="Display Name:"
                            InputComponent={InputText}
                            inputProps={{
                                placeholder: 'Maximum 10 characters',
                            }}
                            required
                        />
                    </div>
                    <div className={styles.spaciousItem}>
                        <Input 
                            id="joinPassword"
                            label="Password:"
                            InputComponent={InputText}
                            inputProps={{
                                placeholder: 'Minimum 6 characters',
                            }}
                            required
                        />
                    </div>
                    <div className={styles.spaciousItem}>
                        <Input 
                            id="joinPasswordConfirm"
                            label="Confirm Password:"
                            InputComponent={InputText}
                            required
                        />
                    </div>
                    <div className={classNames([styles.spaciousItem, styles.authButton])}>
                        <Button id='joinButton' label='Join!' onClick={() => {}}/>
                    </div>
                </div>
            </Card>          
        </div>
    );
};

export default Auth;