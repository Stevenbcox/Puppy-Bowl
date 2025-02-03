import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import Details from "./components/Details";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App background">
      <NavBar />
      <h1>Stevens Puppy Bowl!</h1>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/player/:id" element={<Details />} />
        <Route path="/player/add-player" element={<NewPlayerForm />} />
      </Routes>
    </div>
  );
}

export default App;
