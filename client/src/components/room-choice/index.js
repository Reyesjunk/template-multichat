import React from 'react';
import './room-choice.css';
import { Link } from 'react-router-dom';
export default function RoomChoice(props) {
  return (
    <div className='rooms'>
      <div><Link to='/room/1'>Room 1</Link></div>
      <div><Link to='/room/2'>Room 2</Link></div>
      <div><Link to='/room/3'>Room 3</Link></div>
      <div><Link to='/room/4'>Room 4</Link></div>
    </div>
  );
}