import React from 'react';
import Card from '@/components/card';

import styles from './dashboardControlPanel.module.css';

const DashboardControlPanel = () => {

    return (
        <>
            <div className={styles.container}>
                <Card hideFooter hideTopRadius>

                </Card>
            </div>
            <div className={styles.controlPanelSpacer} />        
        </>
    );
};

export default DashboardControlPanel;