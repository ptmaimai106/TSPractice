class ProductList {
    productList = [];
    add = (name, price, isInStock) =>{
        const product = {
            id: this.getLastId() + 1,
            name,
            price,
            isInStock
        }
        this.productList.push(product);
        return product.id;
    }
    getById = id => {
       return this.productList.find(item => item.id === id);
    }

    getInStock = () => {
        return this.productList.filter(item => item.isInStock);
    }

    removeById = id => {
        const index = this.productList.findIndex(item => item.id === id);
        if(index === -1){
            return;
        }
        this.productList = [...this.productList.slice(0, index), ...this.productList.slice(index+1, this.productList.length)];
    }

    getLastId = () => {
        const productListAmount = this.productList.length;
        if(productListAmount === 0 ) return -1;
        return this.productList[productListAmount-1].id;
    }

}

const productList = new ProductList();
const data = [
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

data.map(item => productList.add(item.name, item.price, item.isInStock));

console.log("Number of stock: ", productList.getInStock().length);


const product = productList.getById(1);
console.log(product.name + ': ' + product.price);

productList.removeById(1);
console.log("Number of stock after delete: ", productList.getInStock().length);



