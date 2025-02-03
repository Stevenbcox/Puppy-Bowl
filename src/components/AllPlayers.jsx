import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers } from "../services/api";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayers() {
      try {
        const data = await fetchAllPlayers();
        console.log("Fetched players data:", data);
        setPlayers(data || []);
      } catch (error) {
        console.error("Error fetching players:", error);
      } finally {
        setLoading(false);
      }
    }
    getPlayers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="all-players-container">
      {players.length > 0 ? (
        players.map((player) => (
          <div key={player.id} className="player-card">
            <h2>{player.name}</h2>
            <button onClick={() => navigate(`/player/${player.id}`)}>
              See Details
            </button>
          </div>
        ))
      ) : (
        <p>No players found</p>
      )}
    </div>
  );
}