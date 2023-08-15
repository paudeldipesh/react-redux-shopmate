import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./CartCard.css";

export const CartCard = ({ product }) => {
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
