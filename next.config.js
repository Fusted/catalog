module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jjji.ru',
                port: '',
                pathname: '/**',
            },
        ],
    },
    sassOptions: {
        prependData: `@import "styles/variables.module.scss";`,
    },
    async redirects() {
        return [
            {
                source: '/catalog',
                destination: '/catalog/0',
                permanent: true,
            },
        ];
    },
};
