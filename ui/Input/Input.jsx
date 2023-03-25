import styles from './Input.module.scss';

import {clsx} from 'clsx';

export const Input = ({size = 'medium', ...defaultProps}) => {
    return (
        <input {...defaultProps} className={clsx(styles.input, styles[size])} />
    );
};
