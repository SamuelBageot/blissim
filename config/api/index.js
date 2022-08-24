export function getAllProducts(sort = '') {
    return fetch(`https://fakestoreapi.com/products${sort && `?sort=${sort}`}`);
};

export function getSingleProduct(id) {
    return fetch(`https://fakestoreapi.com/products/${id}`);
};

export function getAllCategories() {
    return fetch('https://fakestoreapi.com/products/categories');
};

export function getCategoryProducts(category) {
    return fetch(`https://fakestoreapi.com/products/category/${category}`);
};