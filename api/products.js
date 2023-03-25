/* 
Просто максимально в лоб захаркоженные товары, чтобы не стучаться во внешние АПИ
*/

const MAX_ITEMS_ON_PAGE = 6;
const MAX_PRODUCTS = 20;

const product = {
    title: 'Продукт №',
    company: 'Название компании',
    image: 'https://jjji.ru/400x400',
    badge: '',
    id: 0,
};

export const products = new Array(MAX_PRODUCTS).fill(0).map((_, id) => {
    const badge = id < MAX_PRODUCTS / 2 ? 'new' : 'top';
    return {...product, title: `${product.title} ${id}`, badge, id};
});

export const getProductsList = async (page = 0) => {
    const n = MAX_ITEMS_ON_PAGE;

    if (page * n + n >= products.length) {
        const lastPageLength =
            products.length -
            (Math.ceil(products.length / MAX_ITEMS_ON_PAGE) - 1) *
                MAX_ITEMS_ON_PAGE;
        return products.slice(-lastPageLength);
    }

    return products.slice(page * n, page * n + n);
};

export const getProductsLength = async () => {
    return products.length;
};

export const getMaxPages = async () => {
    return Math.ceil(products.length / MAX_ITEMS_ON_PAGE);
};
