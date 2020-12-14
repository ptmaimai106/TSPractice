export interface IProduct {
    id?: number;
    name: string;
    price: number;
    isInStock: boolean;
}

class ProductList {

    private productList: IProduct[];
    private lastId: number;

    constructor() {
        this.productList = [];
        this.lastId = 0;
    }

    add = (product: IProduct) =>{
        product.id = this.lastId;
        this.productList.push(product);
        this.lastId++;
        return this.lastId;
    }

    getById = (id: number): IProduct => {
        const products = this.productList.filter((item: IProduct) => item.id === id);
        if(products.length === 0){
            throw new Error('Product list is empty');
        }
        return products[0];
    }

    getInStock = () : IProduct[] => {
        return this.productList.filter((item: IProduct) => item.isInStock);
    }

    removeById = (id: number) => {
        let index: number = -1;
        for(let i=0; i< this.productList.length; i++){
            if(this.productList[i].id === id){
                index = i;
                break;
            }
        }
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

export default ProductList;