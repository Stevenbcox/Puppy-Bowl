import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../services/api";

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const data = await fetchSinglePlayer(id);
        console.log("Fetched player data:", data); // Debugging line
        setPlayer(data.player); // Adjust this line based on the actual data structure
      } catch (error) {
        console.error("Error fetching player:", error);
      }
    }
    fetchPlayer();
  }, [id]);

  if (!player) return <p>Loading...</p>;

  return (
    <div className="player-details">
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
    </div>
  );
}