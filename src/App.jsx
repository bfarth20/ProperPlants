import "./styles.css";
import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./components/PlantList/PlantList";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (plant) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="plant-body">
      <h1 className="title">🌿 Proper Plants</h1>
      <div className="page-grid">
        <PlantList plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;
