import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const baseURL = `http://localhost:6001/plants/`;
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((r) => r.json())
      .then(setPlants);
  }, []);
  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
