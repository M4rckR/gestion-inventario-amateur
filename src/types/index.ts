export type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export type NewProduct = Omit<Product, 'id'>;


