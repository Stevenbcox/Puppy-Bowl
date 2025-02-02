import { useEffect, useState } from 'react';
import { fetchAllPlayers, fetchSinglePlayer } from '../services/api';

export default function AllPlayers() {

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        async function fetchPlayers() {
            try {
                const data = await fetchAllPlayers();
                setPlayers(data.players);
            } catch (error) {
              console.error(error);
            }
        }
        fetchPlayers();
    },[])

    return (
        <div>
        {
            players.map((player)=>{
                return (
                    <div key={player.id}>
                        <h4>{player.name}</h4>
                        <button onClick={() =>  fetchSinglePlayer(player.id)}>see details</button>
                    </div>
                )
            })
        }
    </div>
    );
}