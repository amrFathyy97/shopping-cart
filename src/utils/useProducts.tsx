import { useEffect, useState } from "react";
import { IProduct } from "../types/Product.type";



export default function useProducts() {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return products;
}
