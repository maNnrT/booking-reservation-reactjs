import React from 'react'
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HashRouter} from "react-router-dom";

import Home from "./pages/home/Home.js"
import Hotel from './pages/hotel/Hotel.js';
import List from "./pages/list/List.js";
function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </HashRouter>
  );
}

export default App
