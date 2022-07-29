'use strict';
const products = [{
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg", ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

products.sort(function(price1, price2) {
    return item1.price - item2.price;
});
console.log(products);

const filteredProducts = products.filter(function(product) {
    return product.photos != '' && product.photos != undefined;
});
console.log(filteredProducts);