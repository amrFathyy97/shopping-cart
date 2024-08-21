import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import { CartContext } from '../../App';
import { IProduct } from '../../types/Product.type';

const ProductsBtn = ({product}: {product: IProduct}) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartContext.Provider');
  }

  const {cart, setCart} = cartContext

  const [quantity] = useState<number>(1)
  
    const navigate = useNavigate()


  return (
        <>
    <div className="btn">
    <button
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
    >
      Details
    </button>
    <button
      onClick={() => {
        toast('🛒 Added to cart!', {
          position: "top-right",
          autoClose: 200,
          hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          const duplicatedProduct = cart.find((cartProduct: IProduct) => cartProduct.id == product.id );
          if(!duplicatedProduct) {
            setCart((prev: IProduct[]) => [...prev, {...product, quantity}])
          }else {
            const newCart = cart.map((cart) => {
              if(cart.quantity && cart.id === product.id) {
                cart.quantity++
              }
              return cart
            })
            setCart(newCart)            
          }

            
      }}
    >
      Add to cart
    </button>
  </div>
  </>
)
}

export default ProductsBtn