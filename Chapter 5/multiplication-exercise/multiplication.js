const a = [1, 3, 5, 7, 9]
const b = [2, 5, 7, 9, 14]
// compute the products of each permutation for efficient retrieval
const products = { }
// ...
const makeProducts = function(arr1, arr2) {
    arr1.forEach(multiplicant => {
        if(!products[multiplicant]) {
            products[multiplicant] = {}
        }
        arr2.forEach(multiplier => {
            if(!products[multiplier]) {
                products[multiplier] = {}
            }
            products[multiplicant][multiplier] = multiplicant * multiplier;
            products[multiplier][multiplicant] = products[multiplicant][multiplier];
        })
    });
}
const getProducts = function(a,b) {
    // if(products[a]) {
    //     return products[a][b] || null;
    // }
    // return null;
    if(products[a] && products[b]) {
        return products[a][b];
    } else {
        makeProducts([a], [b]);
    }
    return null;
}

makeProducts(a, b);
console.log(getProducts(4, 6));
console.log(getProducts(4, 6));
//get an arbitrary key/value pair. If nonexistent, compute it and store it.
