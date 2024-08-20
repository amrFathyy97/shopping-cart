import Loading from "../UI/Loading/Loading";
import useProducts from "../utils/useProducts";
import Search from "./Search";

const ProductsComponent = () => {
  const products = useProducts();

  return (
    <>
      {products ? (
        <>
          <Search data={products} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProductsComponent;
