import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer, removePlayer } from "../services/api";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const data = await fetchSinglePlayer(id);
        console.log("Fetched player data:", data); // Debugging line
        setPlayer(data);
      } catch (error) {
        console.error("Error fetching player:", error);
      }
    }
    fetchPlayer();
  }, [id]);

  const handleRemovePlayer = async () => {
    try {
      await removePlayer(id);
      console.log(`Player ${id} removed`);
      navigate("/"); // Navigate back to the list of players after removal
    } catch (error) {
      console.error("Error removing player:", error);
    }
  };

  if (!player) return <p>Loading...</p>;

  return (
    <div className="player-details">
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <p>Team ID: {player.teamId}</p>
      {player.imageUrl && <img src={player.imageUrl} alt={player.name} />}
      <button onClick={handleRemovePlayer}>Remove Player</button>
    </div>
  );
}
