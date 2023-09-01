import React from 'react';

import '../styles/Step1.css'

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
                <textarea class="content" placeholder="Ex) 예시 컨텐츠 작성 힌트 텍스트 작성"></textarea>
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