import "./CartItem.css";

function CartItem({ plant, addToCart, removeFromCart }) {
  return (
    <li className="cart-item">
      <span className="cart-item-img">{plant.image}</span>
      <span className="cart-item-name">{plant.name}</span>
      <span className="cart-item-qty">Qty: {plant.quantity}</span>
      <button onClick={() => addToCart(plant)}>+</button>
      <button onClick={() => removeFromCart(plant)}>-</button>
    </li>
  );
}

export default CartItem;
