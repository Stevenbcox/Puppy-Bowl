const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2410-ftb-et-pt`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/players`);
    const players = await response.json();
    return players.data.players; // Adjusted to match the structure of the API response
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const playerData = await response.json();
    return playerData.data.player; // Adjusted to match the structure of the API response
  } catch (err) {
    console.error("Error fetching single player:", err);
    return null;
  }
};

export const addNewPlayer = async (name, breed, url, team) => {
  try {
    const response = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, breed, imageUrl: url, team }),
    });
    const json = await response.json();
    return json;
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

export const removePlayer = async (playerId) => {
  try {
    await fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error(`Whoops, trouble removing player #${playerId} from the roster!`, err);
  }
};