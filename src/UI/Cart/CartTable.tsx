import CartItems from "./CartItems"

const CartTable = ({ isOpen}: {isOpen: boolean}) => {

    

  return (
    <div className={`cart-expand ${isOpen ? "right-0 max-sm:left-0" : "right-[-100%] max-sm:left-[-100%]"}`}>
      <CartItems/>
    </div>
)
}

export default CartTable