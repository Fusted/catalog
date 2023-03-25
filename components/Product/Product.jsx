import styles from './Product.module.scss';

import Image from 'next/image';
import {Badge} from '../../ui/Badge/Badge';

export const Product = ({product}) => {
    return (
        <div className={styles.product}>
            <Badge className={styles.badge} text={product.badge} />
            <Image
                className={styles.image}
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
            />
            <div className={styles.text}>
                <div className={styles.company}>{product.company}</div>
                <div>{product.title}</div>
            </div>
        </div>
    );
};
