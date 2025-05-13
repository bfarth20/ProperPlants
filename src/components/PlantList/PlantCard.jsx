import "./PlantCard.css";

function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <div className="plant-emoji" style={{ fontSize: "2rem" }}>
        {plant.image}
      </div>
      <div className="plant-name">{plant.name}</div>
      <button onClick={() => addToCart(plant)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
}

export default PlantCard;
