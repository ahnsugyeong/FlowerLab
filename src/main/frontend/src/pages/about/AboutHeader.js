import React from 'react';
import Nav from '../../components/Nav';
import MainFlower from '../../assets/main-flower.png'

import '../../styles/about/AboutHeader.css'

import { Link } from 'react-router-dom';

function AboutHeader() {

  const handleNextClick = () => {
    const about1Element = document.getElementById('about1');
    if (about1Element) {
      about1Element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-header-container">
      <div className="background-container">
        <Nav className="about-main-nav" />
        <div className="main-logo">
          FLOWER<br />LAB
        </div>
        <div className="main-content">
          당신의 특별한 날을, 더 특별하게 만들어주기 위한<br />
          AI 꽃다발 추천 서비스 💐
        </div>

        <div className="main-menu">
          
            <div className="main-menu-item-1" onClick={handleNextClick}>
              <div className="main-menu-item-text">플라워랩 서비스 더 알아보기</div>
              <img src={MainFlower} alt="꽃" className="main-menu-item-img" />
            </div>
          
          <Link to={'/laboratory'} className="no-text-decoration">
          <div className="main-menu-item-2">
            <div className="main-menu-item-text">AI 꽃다발 추천받으러 가기</div>
            <img src={MainFlower} alt="꽃" className="main-menu-item-img" />
          </div>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default AboutHeader;