import React from 'react';
import './room-choice.css';
import { Link } from 'react-router-dom';
export default function RoomChoice(props) {
  return (
    <div className='rooms'>
      <h1>Hey You! Pick a hang out room</h1>
      <div className='rm-choose'><Link to='/room/1'><span>Room 1</span></Link></div>
      <div className='rm-choose'><Link to='/room/2'><span>Room 2</span></Link></div>
      <div className='rm-choose'><Link to='/room/3'><span>Room 3</span></Link></div>
      <div className='rm-choose'><Link to='/room/4'><span>Room 4</span></Link></div>
    </div>
  );
}