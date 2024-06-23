export interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
}

export interface ProductInCart extends Product {
	quantity: number;
}
