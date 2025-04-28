import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Game } from './components/Game/Game.jsx'


export default function App() {
  return (
    <BrowserRouter basename='/tic-tac-toe/'>
      <Routes>
        <Route path="/" element={<Navigate to="/game" />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );

}
