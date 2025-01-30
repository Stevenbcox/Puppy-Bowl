// Use the API_URL variable for fetch requests
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2410-ftb-et-pt`;

export async function fetchAllPlayers() {
    try {
      const response = await fetch(`${API_URL}/players`);
      const data = await response.json();
      return data.players;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  
  //write a function to fetch a single player from the API and import this function into the singleplayer.jsx component
  export async function fetchSinglePlayer() {
    try {
      const response = await fetch(`${API_URL}/players`)
      const data = await response.json();
      return data.player;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
