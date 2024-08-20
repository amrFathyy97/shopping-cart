import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IProduct } from "../types/Product.type";
import RenderProducts from "../UI/Products/RenderProducts";

const Search = ({data}: {data: IProduct[]}) => {

    const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(
        null
    );
  

    useEffect(() => {
        setFilteredProducts(data);
      }, [data]);

  return (
    <div className="container mx-auto">
    {
        filteredProducts &&
        <>
    <TextField
    sx={{ marginTop: "3rem", width: "100%" }}
    id="outlined-basic"
    label="Search"
    variant="outlined"
    onChange={(e) => {
        if (data) {
            setFilteredProducts(
                data?.filter((product) =>
                    product.title.toLowerCase().includes(e.target.value)
            )
        );
    }
}}
/>
    <RenderProducts products={filteredProducts}/>
</>
}
    </div>
  );
};

export default Search;
