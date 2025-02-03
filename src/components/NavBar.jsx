import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All Players</Link>
        </li>
        <li>
          <Link to="/player/add-player">Add Player</Link>
        </li>
      </ul>
    </nav>
  );
}