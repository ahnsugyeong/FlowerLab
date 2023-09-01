import React from 'react';

import '../../styles/laboratory/Step1.css'

function Step1() {

    return (
        <div className="step1-container">
            <div class="step1-grid-item-1"></div>
            <div class="step1-grid-item-2"></div>
            <div class="step1-grid-item-3"></div>
            <div class="step1-grid-item-4"></div>
            <div class="step1-grid-item-5">
                <div className="step1-title">
                    STEP 1
                </div>
                <div className="step1-content">
                    누구에게 꽃다발을 선물하고 싶은신가요?<br />
                    말씀해주신 이야기를 바탕으로 저희가 꽃다발을 만들어 드릴게요!
                </div>
            </div>
            <div class="step1-grid-item-6"></div>
            <div class="step1-grid-item-7"></div>
            <div class="step1-grid-item-8">
                <div className="step1-number">
                    01
                </div>
                <div className="text-title">
                    CONTENTS
                </div>
                <textarea class="content" placeholder="Ex) 가장 친한 친구가 이번 봄에 자신의 꿈에 조금 더 가까워지기 위해 미국으로 유학을 가게 되었어. 사랑과 존경의 마음을 담아 친구의 꿈을 응원하고 우리의 변치 않을 우정을 담은 꽃다발을 선물하고 싶어."></textarea>
                <div class="step1-next-btn">
                    →
                </div>
            </div>
            <div class="step1-grid-item-9"></div>
            <div class="step1-grid-item-10"></div>
            <div class="step1-grid-item-11"></div>
            <div class="step1-grid-item-12"></div>
        </div>

    );
}

export default Step1;