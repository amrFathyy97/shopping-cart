export interface IProduct {
    quantity?: number;
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    ratings: {rate: number, count: number}
    }