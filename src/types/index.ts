export type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export type NewProduct = Omit<Product, 'id'>;


