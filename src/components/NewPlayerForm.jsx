import { useState } from "react";

function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPlayer = { name, breed };
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2410-ftb-et-pt/players`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPlayer),
          }
        );
        const data = await response.json();
        console.log(data);
        // onPlayerAdded(data);
      } catch (error) {
        console.error("Error adding player:", error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />

        <button type="submit">Add Player</button>
      </form>
    );
  };

export default NewPlayerForm;
