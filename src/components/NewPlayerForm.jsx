import { useState } from "react";
import { addNewPlayer } from "../services/api";

function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [url, setUrl] = useState("");
    const [team, setTeam] = useState("");
    const [status, setStatus] = useState("field");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Name:", name);
        console.log("Breed:", breed);
        console.log("URL:", url);
        console.log("Team:", team);
        console.log("Status:", status);
        try {
            const data = await addNewPlayer(name, breed, url, team, status);
            console.log("Player added:", data);
            // onPlayerAdded(data);
        } catch (error) {
            console.error("Error adding player:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} id="new-player">
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
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
            >
                <option value="field">Field</option>
                <option value="bench">Bench</option>
            </select>
            <input
                type="text"
                placeholder="Image URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <input
                type="text"
                placeholder="Team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
            />
            <button type="submit">Add Player</button>
        </form>
    );
}

export default NewPlayerForm;