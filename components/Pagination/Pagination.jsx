import styles from './Pagination.module.scss';

import {useState, useEffect} from 'react';
import {useDebouncedFunction} from '../../hooks/useDebouncedFunction';
import {Button} from '../../ui/Button';
import {Input} from '../../ui/Input';
import {getPageNumberFromSting} from '../../utils';

export const Pagination = ({
    onPrevClick,
    onNextClick,
    onInputChange,
    currentPage,
    maxPages,
}) => {
    const [value, setValue] = useState(currentPage);

    useEffect(() => {
        setValue(getPageNumberFromSting(currentPage));
    }, [currentPage]);

    const debouncedInputChange = useDebouncedFunction(onInputChange, 500);

    const onChange = (event) => {
        const value = getPageNumberFromSting(event.target.value);

        setValue(value);
        debouncedInputChange(value);
    };

    return (
        <div className={styles.pagination}>
            <Button
                onClick={onPrevClick}
                text="Назад"
                size="large"
                disabled={currentPage <= 1}
            />
            <Input
                onChange={onChange}
                value={value}
                maxLength={4}
                size="small"
            />
            <Button
                onClick={onNextClick}
                text="Вперёд"
                size="large"
                disabled={currentPage >= maxPages}
            />
        </div>
    );
};
