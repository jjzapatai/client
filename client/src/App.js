import React from "react";

// import {BrowserRouter as Router, Route } from 'react-router-dom';

import Flights from "./components/Flights.js";
import Chats from "./components/Chats.js";

//import './App.css';

const App = () => {
  return (
    <div>
      <h1>Mapa en Vivo</h1>
      <Flights />
      <h1>Chat de Control</h1>
      <Chats />
    </div>
  );
};


export default App;
