export const filterNotNumbers = (str) => {
    const string = str + '';
    return parseInt(string.replace(/\D/g, ''));
};

export const getPageNumberFromSting = (str) => {
    return filterNotNumbers(str) || 1;
};
