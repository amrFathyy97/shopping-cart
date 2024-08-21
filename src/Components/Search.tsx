import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IProduct } from "../types/Product.type";
import RenderProducts from "../UI/Products/RenderProducts";

const Search = ({ data }: { data: IProduct[] }) => {

  const [sortOption, setSortOption] = useState<string>("name-a-z");

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFilteredProducts( (data?? []).filter((product) => product.title.toLowerCase().includes(e.target.value)))

  };

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "name-a-z":
        setFilteredProducts(
          (prev) =>
            prev && [...prev.sort((a, b) => a.title.localeCompare(b.title))]
        );
        setSortOption("name-a-z")
        break;
      case "name-z-a":
        setFilteredProducts(
          (prev) =>
            prev && [...prev.sort((a, b) => b.title.localeCompare(a.title))]
        );
        setSortOption("name-z-a")
        break;
      case "price asc":
        setFilteredProducts((prev) => [
          ...(prev ?? []).sort((a, b) => b.price - a.price),
        ]);
        setSortOption("price asc")
        break;
      case "price desc":
        setFilteredProducts((prev) => [
          ...(prev ?? []).sort((a, b) => a.price - b.price),
        ]);
        setSortOption("price desc")
        break;
    }
  };

  const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(
    null
  );

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);



  useEffect(() => {}, [sortOption])

  return (
    <div className="container mx-auto my-10">
      {filteredProducts && (
        <>
          <TextField
            sx={{ marginTop: "3rem", width: "100%" }}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={handleSearch}
          />
          <select name="sort" value={sortOption} id="" onChange={handleSorting}>
            <option value="name-a-z">Name A-Z</option>
            <option value="name-z-a">Name Z-A</option>
            <option value="price asc">High to low</option>
            <option value="price desc">Low to high</option>
          </select>
          <RenderProducts products={filteredProducts} />
        </>
      )}
    </div>
  );
};

export default Search;
