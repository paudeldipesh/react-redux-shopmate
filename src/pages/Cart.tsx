import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useAppSelector } from "../store/hooks";
import "./Cart.css";

export const Cart = () => {
  const products = useAppSelector((state) => state.cartState.cartList);
  const total = useAppSelector((state) => state.cartState.total);
  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {products.length} | ${total}
        </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
