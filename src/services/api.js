// Use the API_URL variable for fetch requests
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2410-ftb-et-pt`;

export async function fetchPlayers() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching players:", error);
  }
}

export async function getPlayerDetails(id) {
  try {
    const response = await fetch(`${API_URL}/players/%{id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(`Error fetching player details: ${id}`, error);
  }
}

export const addNewPlayer = async (name, breed, url, team) => {
  try {
    const response = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, breed, url, team }),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error adding new player:", error);
  }
};

export const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
      "content-type": "application/json",
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(`Error deleting player: ${playerId}`, error);
  }
};

export const getTeams = async () => {
  try {
    const response = await fetch(`${API_URL}/teams`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching teams:", error);
  }
};
