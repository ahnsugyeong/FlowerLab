import React, { useState } from 'react';
import '../styles/Step2.css';
import ImageSlider from '../components/ImageSlider';

const Step2 = () => {

  return (
    <div className="step2-container">
      <div className="step2-grid-item-1"></div>
      <div className="step2-grid-item-2">
        <div className="step2-title">STEP 2</div>
        <div className="step2-content">
          원하시는 꽃다발 디자인이나 분위기가 있다면 <br />
          아래 사진들 중 한가지를 골라 주세요!
        </div>

        <div className="step2-number">02</div>

        <ImageSlider />

      </div>
      <div className="step2-grid-item-3"></div>
    </div>
  );
};

export default Step2;
