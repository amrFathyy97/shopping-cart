import { useContext, useEffect, useState } from 'react'
import Nav from '../UI/Navbar/Nav'
import { CartContext } from '../App'

const Navbar = () => {

  const cartContext = useContext(CartContext);



  const {cart} = cartContext

  const [expand, setExpand] = useState<boolean>(false)
  const [items, setItems] = useState<number>(0)

    const handleExpand = () => {
        setExpand((prev) => prev ? false : true)
    }

    useEffect(() => {
      setItems(cart.length)
    }, [cart])



  return (
    <>
    <Nav expand={expand} handleExpand={handleExpand} items={items} />
    </>
  )
}

export default Navbar