import ProductList from "./product_list";

const productList = new ProductList();
const data: any[] = [
    {
        name: 'ao1',
        price: 1000,
        isInStock: true
    },
    {
        name: 'ao2',
        price: 2000,
        isInStock: true
    },
    {
        name: 'ao3',
        price: 3000,
        isInStock: true
    }
]

data.map(item => productList.add(item));

console.log("Number of stock: ", productList.getInStock().length);


const product = productList.getById(1);
console.log(product.name + ': ' + product.price);

productList.removeById(1);
console.log("Number of stock after delete: ", productList.getInStock().length);

