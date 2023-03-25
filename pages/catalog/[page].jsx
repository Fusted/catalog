import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {MainContainer} from '../../components/MainContainer/MainContainer';
import {ItemsList} from '../../components/ItemsList/ItemsList';
import {Pagination} from '../../components/Pagination/Pagination';
import {getProductsList} from '../../api/products';
import {getMaxPages} from '../../api/products';
import {getPageNumberFromSting} from '../../utils/';

const Catalog = ({products}) => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(router.query.page);
    const [maxPages, setMaxPages] = useState(1);

    useEffect(() => {
        getMaxPages().then(setMaxPages);
    }, []);

    useEffect(() => {
        const page = Math.min(
            getPageNumberFromSting(router.query.page),
            maxPages
        );

        setCurrentPage(page);
    }, [router.query.page, maxPages]);

    const onNextClick = () => {
        router.push({
            query: {page: +currentPage + 1},
        });
    };

    const onPrevClick = () => {
        router.push({
            query: {page: +currentPage - 1},
        });
    };

    const onInputChange = (page) => {
        if (page != currentPage) {
            router.push({
                query: {page},
            });
        }
    };

    return (
        <MainContainer>
            <ItemsList products={products} />
            <Pagination
                currentPage={currentPage}
                onInputChange={onInputChange}
                onNextClick={onNextClick}
                onPrevClick={onPrevClick}
                maxPages={maxPages}
            />
        </MainContainer>
    );
};

export default Catalog;

export async function getServerSideProps(context) {
    const currentPage = getPageNumberFromSting(context.query.page);
    const products = await getProductsList(currentPage - 1);

    return {
        props: {products},
    };
}
