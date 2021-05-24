import React, { useState, useEffect} from 'react';
import io from "socket.io-client";
import TextField from "@material-ui/core/TextField"
import moment from 'moment';
import './Chats.css';

const socket = io.connect("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl", {
    path: '/flights'
});


const Chat = () => {
  const [ state, setState ] = useState({ message: "", date: "", name: "" })
	const [ chat, setChat ] = useState([])


  useEffect(
		() => {
			socket.on("CHAT", ({ name, date, message }) => {
        setChat([ ...chat, { name, date, message } ])
			})
		},
		[ chat ]
  )
  const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
    e.preventDefault()
    // const date = moment().format('LLL')
		const { name, message } = state
		socket.emit("CHAT", { name, message })
    setState({ message: "", name})
	}
  
  const renderChat = () => {
		return chat.map(({ name, date, message }, index) => (
			<div key={index}>
				<h3>
					{name}: {moment(new Date(date)).format('MMMM Do YYYY, h:mm:ss a')}:<span>{message}</span>
				</h3>
			</div>
		))
  }
  
  return (
		<div className="card">
			<form onSubmit={onMessageSubmit}>
				<h2>Chat</h2>
				<div className="name-field">
					<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
				</div>
				<div>
					<TextField
						name="message"
						onChange={(e) => onTextChange(e)}
						value={state.message}
						id="outlined-multiline-static"
						variant="outlined"
						label="Message"
					/>
				</div>
				<button>Send Message</button>
			</form>
			<div className="render-chat">
				<h2>Centro de Control</h2>
				{renderChat()}
			</div>
			
		</div>
	)
}

export default Chat;
