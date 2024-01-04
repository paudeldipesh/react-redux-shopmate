import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";
import { useAppSelector } from "../store/hooks";

export const Header = () => {
  const products = useAppSelector((state) => state.cartState.cartList);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        Cart: {products.length}
      </Link>
    </header>
  );
};
