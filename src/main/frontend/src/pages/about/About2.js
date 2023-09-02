import React from 'react';

import '../../styles/about/About2.css'
import Bouquet from '../../assets/bouquet.png';


function About2() {

    return (
        <div className="about2-container">
            <div className="about2-background-container">
                <div className="about2-grid-item-1"></div>
                <div className="about2-grid-item-2">

                    <div className="about2-info">
                        <div className="about2-title">
                            ABOUT
                        </div>
                        <div className="about2-content">
                            사용자가 제공한 상황을 바탕으로 AI가 상황에 <br />
                            어울리는 꽃다발을 만들어 드립니다.<br />
                            따로 고민할 걱정 없이 나만의 꽃다발을 완성해 보세요.
                        </div>
                        <img
                            src={Bouquet}
                            alt="bouquete"
                            className="overlay-image"
                        />
                    </div>
                </div>

                <div className="about2-grid-item-3"></div>

            </div>
        </div>

    );
}

export default About2;