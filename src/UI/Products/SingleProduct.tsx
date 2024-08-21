import { useParams } from "react-router-dom"
import useProducts from "../../utils/useProducts";
import Loading from "../Loading/Loading";

const SingleProduct = () => {
    const params = useParams();
    const products = useProducts();

    const product = products?.find((product) => params.id && product.id == parseInt(params.id));
    

  return (
    <div className="my-16 container mx-auto">
        {product ? <>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
        </> : <Loading/>}
    </div>
  )
}

export default SingleProduct