import React, { useState, useEffect} from 'react';
import io from "socket.io-client";
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'

import plane from './icon/b.svg'
import 'leaflet/dist/leaflet.css'
import './leaflet.css'

const socket = io.connect("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl", {
    path: '/flights'
});

const Flights = () => {
  const [ flight, setFlight] = useState([]);
  const [ position, setPosition ] = useState([]);

  useEffect(() => {
    socket.on('POSITION', message => {
      setPosition((prev) => ([...prev, message]));
    })
  }, []);

  useEffect(() => {
    socket.emit('FLIGHTS'); 
    socket.on('FLIGHTS', message => {
      setFlight(message);
    });
  }, []);

  const airplanePng = new Icon({
    iconUrl: plane,
    iconSize: [30,30],
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  });

  const renderPositions = () =>{
    return position.map((pos) => {
      const posiciones= [
        pos.position[0], pos.position[1]
      ]
      return (
        <Marker position={posiciones} icon={airplanePng}>
          <Popup code={pos.code}>
            <code>{pos.code}</code>
          </Popup>
        </Marker>  
      )
    })
  }

  const renderPath = () => {
    return flight.map((vuelos) => {
    const multiPolyline = [
      [ vuelos.origin[0], vuelos.origin[1] ],
      [ vuelos.destination[0], vuelos.destination[1] ],
    ]
    return (
      <Polyline pathOptions={{ color: 'red' }} positions={multiPolyline} />
    )
  })}

  const renderInfo = () => {
		return flight.map((vuelo) => (
			<div >
				<h3>{vuelo.code}</h3>
        <p>Aerolínea:       {vuelo.airline}</p>
        <p>Origen:          {vuelo.origin[0]} ; {vuelo.origin[1]}</p>
        <p>Destino:         {vuelo.destination[0]} ; {vuelo.destination[1]}</p>
        <p>Avión:           {vuelo.plane}</p>
        <p>Número asientos: {vuelo.seats}</p>
        {vuelo.passengers.map((pasajero) => {
          return (
            <li>{pasajero.name}, edad:{pasajero.age} </li>
            )
          })
        }
			</div>
		))
  }

  return (
    <div>
      <div  id="leaflet-container">
      <MapContainer center={[0, 0]} zoom={3.1} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderPositions()}
        {renderPath()}
      </MapContainer>      
    </div>
    <div className='flight-information-container'>
      <h2>Información de vuelos</h2>
      {renderInfo()}
    </div>
    </div>
  )
};

export default Flights;