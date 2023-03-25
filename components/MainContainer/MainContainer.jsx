import styles from './MainContainer.module.scss';

import Head from 'next/head';

export const MainContainer = ({children}) => {
    return (
        <>
            <Head>
                <title>Тестовое задание</title>
            </Head>
            <div className={styles.MainContainer}>{children}</div>
        </>
    );
};
