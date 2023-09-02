import React from 'react';

import AboutBackgroundFlower1 from '../../assets/about-background-flower-1.png'
import AboutBackgroundFlower2 from '../../assets/about-background-flower-2.png'

import '../../styles/about/About5.css'

function About5() {

    return (
        <div class="about5-background-container">
            <div class="left-images">
                <img src={AboutBackgroundFlower1} alt="Image 1" />
                <img src={AboutBackgroundFlower2} alt="Image 2" />
            </div>
            <div className="about5-info">
                <div className="about5-text-1">
                    Tell me the situation, and get your personal BOUQUET
                </div>
                <div className="about5-text-2">
                    상황을 간단히 알려주세요. 어울리는 꽃다발을 만들어 드릴게요.
                </div>

            </div>
            <div class="right-images">
                <img src={AboutBackgroundFlower2} alt="Image 3" />
                <img src={AboutBackgroundFlower1} alt="Image 4" />
            </div>
        </div>


    );
}

export default About5;