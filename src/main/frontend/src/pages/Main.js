import React from 'react';
import '../styles/Main.css'
import backgroundFlower from '../assets/background-flower.png'
import Nav from '../components/Nav';

function Main() {

  return (
    
    <div className="background-container">
      <img
        src={backgroundFlower}
        alt="배경 꽃 이미지"
        className="background-flower"
      />
      <Nav />

    </div>
    
  );
}

export default Main;