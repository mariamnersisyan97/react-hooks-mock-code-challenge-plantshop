import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const renderPlants = plants.map((plant) => (
    <PlantCard plant={plant} key={plant.id} />
  ));
  return <ul className="cards">{renderPlants}</ul>;
}

export default PlantList;
