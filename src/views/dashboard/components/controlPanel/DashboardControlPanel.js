import React from 'react';
import Card from '@/components/card';
import Input from '@/src/components/inputs/input/Input';
import InputText from '@/src/components/inputs/inputText';
import BookmarkIcon from '@/src/components/icons/bookmarkIcon';
import CheckmarkIcon from '@/src/components/icons/checkmarkIcon';
import FilterIcon from '@/src/components/icons/filterButton';

import utilStyles from '@/styles/utils.module.css'
import styles from './dashboardControlPanel.module.css';
import { classNames } from '@/utils';

const DashboardControlPanel = () => {

    return (
        <>
            <div className={styles.container}>
                <Card hideFooter hideTopRadius>
                    <div className={classNames([styles.contentContainer, utilStyles.ftGray])}>
                        <div className={styles.controlPanelItemContainer}>
                            <span className={classNames(["material-symbols-rounded"])}>filter_alt</span>
                            <span className={styles.controlPanelItem}>:</span>
                            <Input 
                                id="filterSearch"
                                InputComponent={InputText}
                                inputProps={{
                                    placeholder: 'Search By Title'
                                }}
                            />
                        </div>
                        <div className={styles.controlPanelItemContainer}>
                            <FilterIcon 
                                classes={[styles.controlPanelItem]}
                                Icon={BookmarkIcon} 
                            />
                            <FilterIcon 
                                classes={[styles.controlPanelItem]}
                                Icon={BookmarkIcon} 
                            />
                            <FilterIcon 
                                classes={[styles.controlPanelItem]}
                                Icon={BookmarkIcon} 
                            />      
                        </div>
                        <div className={styles.controlPanelItemContainer}>
                            <FilterIcon 
                                Icon={CheckmarkIcon} 
                            />
                        </div>
                    </div>
                </Card>
            </div>
            <div className={styles.controlPanelSpacer} />        
        </>
    );
};

export default DashboardControlPanel;