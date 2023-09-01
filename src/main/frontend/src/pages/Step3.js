import React from 'react';
import '../styles/Step3.css';

const Step3 = () => {
  return (
    <div className="step3-container">
      <div class="step3-grid-item-1"></div>
      <div class="step3-grid-item-2">
        <div className="step3-title">
          STEP 3
        </div>
        <div className="step3-content">
          원하시는 꽃다발 색상이 있으신가요? <br />
          AI가 참고할 수 있도록 아래 중 한가지를 골라주세요!
        </div>

        <div className="step3-number">
          03
        </div>



        <div className="step3-color-grid">
          <div className="step3-color-grid-item-1">회색</div>
          <div className="step3-color-grid-item-2">진한 파란색</div>
          <div className="step3-color-grid-item-3">하얀색</div>
          <div className="step3-color-grid-item-4">연한 노란색</div>
          <div className="step3-color-grid-item-5">진한 노란색</div>
          <div className="step3-color-grid-item-6">진한 청색</div>
          <div className="step3-color-grid-item-7">검은색</div>
          <div className="step3-color-grid-item-8">어두운 연두색</div>
          <div className="step3-color-grid-item-9">어두운 빨간색</div>
          <div className="step3-color-grid-item-10">연한 보라색</div>
          <div className="step3-color-grid-item-11">연한 빨간색</div>
          <div className="step3-color-grid-item-12">어두운 초록색</div>
          <div className="step3-color-grid-item-13">연한 청색</div>
          <div className="step3-color-grid-item-14">진한 분홍색</div>
          <div className="step3-color-grid-item-15">연한 주황색</div>
          <div className="step3-color-grid-item-16">밝은 하늘색</div>
        </div>


        <div class="step3-next-btn">
          →
        </div>

      </div>
      <div class="step3-grid-item-3"></div>
    </div>
  );
};

export default Step3;
