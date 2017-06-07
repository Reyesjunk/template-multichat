import React from 'react';
import './room.css';
import io from 'socket.io-client';
const socket = io(); 
export default class Room extends React.Component {
  
  render() {
   
    return (
      <div className='room'>
        <h2>{`Users in the Room ${this.props.match.params.id}`}</h2>
        <ul className='users-in-room'></ul>
        <h2>Messages</h2>
        <ul id="messages"></ul>
        <form action="">
          <input id="m" /><button>Send</button>
        </form> 
      </div>
    );
  }

}