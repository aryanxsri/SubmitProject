import React from 'react';
import Navbar from './Navbar';
// import App from './User';
import IPAddress from './IPadd';
import Clock from './Clock';
import Location from './location';


function Homepage({name}) {

  const curName=localStorage.getItem('user');
  return (
   
    <>
    <Navbar user = {name}/>
   
    <div>
      <h3>Welcome  {curName} :)</h3>
      
      <Clock/>
      <Location/>
    </div>
    </>
  )
}

export default Homepage