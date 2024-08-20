import Loading from '../UI/Loading/Loading';
import Products from '../UI/Products/Products'
import useProducts from '../utils/useProducts';

const ProductsComponent = () => {

  const products = useProducts();


  return (
    <>
    {products ? <Products products={products}/> : <Loading/>}
    </>
  )
}

export default ProductsComponent