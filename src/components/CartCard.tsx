import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./CartCard.css";
import { Item } from "../store/item";

interface CartCardProps {
  product: Item;
}

export const CartCard = ({ product }: CartCardProps) => {
  const dispatch = useDispatch();
  const { name, price, image } = product;

  return (
    <div className="cart-cart">
      <img src={image} alt={name} />
      <p className="product-name">{name}</p>
      <p className="product-price">${price}</p>
      <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  );
};
