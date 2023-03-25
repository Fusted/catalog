import styles from './Badge.module.scss';

import {clsx} from 'clsx';

export const Badge = ({text, className}) => {
    return <div className={clsx(styles.badge, className)}>{text}</div>;
};
