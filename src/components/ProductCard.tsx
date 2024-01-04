import { useEffect, useState } from "react";
import { add, remove } from "../store/cartSlice";
import { Item } from "../store/item";
import "./ProductCard.css";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface ProductCardProps {
  product: Item;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cartState.cartList);
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
