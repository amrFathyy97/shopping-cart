import { IProduct } from "../../types/Product.type";
import "./products.css";
import ProductsBtn from "./ProductsBtn";
import { AnimatePresence, motion } from "framer-motion"

const RenderProducts = ({products}: {products: IProduct[]}) => {

  const boxes = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      }
    }),
    hidden: { opacity: 0 },
  }

  const elements =
    products &&
    products.map((product: IProduct, index: number) => (
      <motion.div
      custom={index}
      variants={boxes}
      initial="hidden"
      animate="visible"
      exit="hidden"

        className=" p-5 flex flex-col rounded-md justify-between shadow-lg m-1 h-[400px] items-center"
        key={product.id}
      >
        <h1 title={product.title}>{product.title}</h1>
        <img
          src={product.image}
          className="w-40 h-40 object-contain"
          alt={product.title}
        />
        <h2>{product.price}$</h2>
        <ProductsBtn product={product}/>
      </motion.div>
    ));

  return (
    <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <AnimatePresence>
      { elements}
      </AnimatePresence>
    </div>
  );
};

export default RenderProducts;
