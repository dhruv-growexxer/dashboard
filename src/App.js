import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactList from "./pages/ContactList";
import Covid from "./pages/Covid";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactlist" element={<ContactList />} />
      <Route path="/covid" element={<Covid />} />
    </Routes>
  );
}

export default App;
