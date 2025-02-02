import { useEffect, useState } from "react";
import { fetchSinglePlayer } from '../services/api';

export default function SinglePlayer() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const data = await fetchSinglePlayer();
        setPlayer(data.player);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);

  return (
    <div>
      <h4>{player.name}</h4>
    </div>
  );
}