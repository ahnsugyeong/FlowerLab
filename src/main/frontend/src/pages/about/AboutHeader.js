import React from 'react';
import Nav from '../../components/Nav';
import MainFlower from '../../assets/main-flower.png'

import '../../styles/about/AboutHeader.css'

import { Link } from 'react-router-dom';

function AboutHeader() {

  return (
    <div className="about-header-container">
      <div className="background-container">
        <Nav className="main-nav" />
        <div className="main-logo">
          FLOWER<br />LAB
        </div>
        <div className="main-content">
          당신의 특별한 날을, 더 특별하게 만들어주기 위한<br />
          AI 꽃다발 추천 서비스 💐
        </div>

        <div className="main-menu">
          <Link to={'/laboratory'} className="no-text-decoration">
            <div className="main-menu-item-1">
              <div className="main-menu-item-text">꽃다발 추천받아서 주문하기</div>
              <img src={MainFlower} alt="꽃" className="main-menu-item-img" />
            </div>
          </Link>
          <Link to={'/laboratory'} className="no-text-decoration">
            <div className="main-menu-item-2">
              <div className="main-menu-item-text">AI 꽃다발 생성하기</div>
              <img src={MainFlower} alt="꽃" className="main-menu-item-img" />
            </div>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default AboutHeader;