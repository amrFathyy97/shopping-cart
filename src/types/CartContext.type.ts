import { IProduct } from "./Product.type";

export interface CartContextType {
    cart: IProduct[];
    setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  }