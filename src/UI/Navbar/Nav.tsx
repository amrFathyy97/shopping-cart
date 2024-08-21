import { FaBars } from "react-icons/fa";
import "./nav.css";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Nav = ({
  expand,
  handleExpand,
  items,
}: {
  expand: boolean;
  handleExpand: () => void;
  items: number;
}) => {
  return (
    <>
      <nav className="navbar">
        <div className="container  h-full mx-auto flex justify-between items-center">
          <div className="logo">
            <h1 className="cursor-pointer text-xl">
              {" "}
              <Link to="/">Logo</Link>
            </h1>
          </div>

          <div className={`links expand-nav ${expand && "left-0"}`}>
            <ul className="container mx-auto flex max-sm:flex-col gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li className="max-sm:relative">
                <Link to="#">
                  <Cart items={items} />
                </Link>
              </li>
            </ul>
          </div>
          <FaBars className="cursor-pointer sm:hidden" onClick={handleExpand} />
        </div>
      </nav>
    </>
  );
};

export default Nav;
