import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agents from './components/Agents';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AgentDetails from './components/AgentDetails';
import DataState from './context/DataState';
import Buddies from './components/Buddies';
import Bundles from './components/Bundles';
import GameModes from './components/GameModes';
import Maps from './components/Maps';
import Weapons from './components/Weapons';
import PlayerCards from './components/PlayerCards';
import CompTiers from './components/CompTiers';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <DataState>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:id" element={<AgentDetails />} />
        <Route path="/buddies" element={<Buddies />} />
        <Route path="/skins" element={<Bundles />} />
        <Route path="/ranks" element={<CompTiers />} />
        <Route path="/gameModes" element={<GameModes />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/playerCards" element={<PlayerCards />} />
      </Routes> 
      <Footer/>
      </DataState>
    </Router>
  )
}

export default App
