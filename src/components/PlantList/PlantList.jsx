import PlantCard from "./PlantCard";
import "./PlantList.css";

function PlantList({ plants, addToCart }) {
  return (
    <div>
      <h2 className="available-plants">Available Plants</h2>
      <div className="plant-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default PlantList;
