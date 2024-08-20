import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const Up = () => {

    const [scroll, setScroll] = useState(0);

    window.onscroll = () => setScroll(scrollY);

    useEffect(() => {
    }, [scroll])

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <BsArrowUp onClick={handleClick} className={`fixed right-0 bottom-[10px] size-6 cursor-pointer ${scrollY > 1000 ? "block" : "hidden"}`}/>
  )
}

export default Up