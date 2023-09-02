import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/about/About1.css'


function About1() {

    return (

        <div className="about-background-container">
            <div className="about-info">
                <div className="about-title">
                    ABOUT
                </div>
                <div className="about-content">
                    ; FLOWER LAB
                </div>

                <div className="about-img-1-background">
                    <div className="about-img-text-1">
                        연인과의 특별한 기념일. 더 특별한 날을 <br />
                        만들기 위한 꽃다발을 선물하기 위해</div>

                </div>
                <img
                    src={require(`../../assets/about-img-1.png`)}
                    alt={`about-img-1`}
                    className="about-img-1"
                />


                <div className="about-img-2-background">
                    <div className="about-img-text-2">
                        혹은 친한 친구의 졸업식. 친구에게 잘 어울릴<br />
                        완벽한 꽃다발을 만들기 위해
                    </div>
                </div>
                <img
                    src={require(`../../assets/about-img-2.png`)}
                    alt={`about-img-2`}
                    className="about-img-2"
                />

                <div className="about-img-3-background">
                    <div className="about-img-text-3">
                        꽃집에 갔지만 막상 어떻게 꽃다발을<br />
                        만들어야 할지 매번 고민이 되시나요?
                    </div>
                </div>
                <img
                    src={require(`../../assets/about-img-3.png`)}
                    alt={`about-img-3`}
                    className="about-img-3"
                />

                <div className="about-img-4-background">
                    <div className="about-img-text-4">
                        플라워랩이 당신의 고민을 해결해 드릴게요.<br />
                        AI 추천 꽃다발 서비스를 이용해 보세요!
                    </div>

                    <Link to="/laboratory" className="about-next-btn">
                        →
                    </Link>

                </div>
                <img
                    src={require(`../../assets/about-img-4.png`)}
                    alt={`about-img-4`}
                    className="about-img-4"
                />

            </div>

        </div>

    );
}

export default About1;