import React, { useState } from 'react';

import '../../styles/laboratory/Step3.css'

const Step3 = () => {
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleItemClick = (index) => {
    if (selectedItem === index) {
      setSelectedItem(-1);
    } else {
      setSelectedItem(index);
    }
  };

  const colorItems = [
    '회색',
    '진한 파란색',
    '하얀색',
    '연한 노란색',
    '진한 노란색',
    '진한 청색',
    '검은색',
    '어두운 연두색',
    '어두운 빨간색',
    '연한 보라색',
    '연한 빨간색',
    '어두운 초록색',
    '연한 청색',
    '진한 분홍색',
    '연한 주황색',
    '밝은 하늘색'
  ];

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
          {colorItems.map((color, index) => (
            <div
              key={index}
              className={`step3-color-grid-item-${index + 1} ${selectedItem === index ? 'selected' : ''
                }`}
              onClick={() => handleItemClick(index)}
              style={{
                opacity: selectedItem === -1 || selectedItem === index ? 1 : 0.4,
              }}
            >
              {selectedItem === index && (

                <div className="flower-image-container">
                  <img
                    src={require(`../../assets/flower-icon-${index + 1}.png`)}
                    alt={`${color}에 대한 꽃 이미지`}
                  />
                </div>

              )}
              {color}
            </div>
          ))}
        </div>


      </div>
      <div class="step3-grid-item-3"></div>
    </div>
  );
};

export default Step3;