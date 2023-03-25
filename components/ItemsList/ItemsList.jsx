import styles from './ItemsList.module.scss';

import {Product} from '../Product/Product';

export const ItemsList = ({products}) => {
    const renderProducts = () => {
        return products.map((product) => (
            <Product key={product.id} product={product} />
        ));
    };
    return <div className={styles.grid}>{renderProducts()}</div>;
};
