import "./Cart.css";
import CartItem from "./CartItem";

function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <div>
      <h2 className="cart-title">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((plant) => (
            <CartItem
              key={plant.id}
              plant={plant}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
