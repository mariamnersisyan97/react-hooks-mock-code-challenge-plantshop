import React, { useState } from "react";

const baseURL = `http://localhost:6001/plants/`;

const initialNewPlant = {
  name: "",
  image: "",
  price: 0,
};

function NewPlantForm({ setPlants }) {
  const [newPlant, setNewPlant] = useState(initialNewPlant);

  function handleChange(e) {
    console.log(e.target.value);
    setNewPlant((currentNewPlantState) => ({
      ...currentNewPlantState,
      [e.target.name]: e.target.value,
    }));
    console.log(newPlant);
    // updating state when changing anything in the form.
    // need what is currently in state
    // pass in a callback to have the currentState. Callback gets passed what is currently in state and make sure to return an object.
    // Spread in what is currently in state.
    // E.target's have a name property & if the e.target.name is "name", the value of the input is getting set
    // This is the controlled form.
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((resp) => resp.json())
      .then((data) => setPlants((currentPlants) => [...currentPlants, data]));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={newPlant.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          value={newPlant.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          value={newPlant.price}
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}
// need state to make this a controlled form. Need a value to set it to the state
export default NewPlantForm;
