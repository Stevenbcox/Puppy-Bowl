// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  return (
    <>
    <div className="App">
      <h1> Stevens Puppy Bowl! </h1>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/player/:id" element={<SinglePlayer />} />
        {/* <Route path="/player/add-player" element={<NewPlayerForm />} /> */}
      </Routes>
      </div>
    </>
  );
}

export default App;
