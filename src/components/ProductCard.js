import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
    const [isInCart, setIsInCart] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cartState.cartList);
    const { id, name, price, image } = product;

    useEffect(() => {
        const productIsInCart = products.find((item) => item.id === id);
        productIsInCart ? setIsInCart(true) : setIsInCart(false);
    }, [products, id]);

    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <p className="name">{name}</p>
            <div className="action">
                <p>${price}</p>
                {isInCart ? (
                    <button onClick={() => dispatch(remove(product))} className="remove">
                        Remove
                    </button>
                ) : (
                    <button onClick={() => dispatch(add(product))}>Add To Cart</button>
                )}
            </div>
        </div>
    );
};
