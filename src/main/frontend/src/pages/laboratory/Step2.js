import React from 'react';
import '../../styles/laboratory/Step2.css'
import ImageSlider from '../../components/ImageSlider';

const Step2 = ({ setClickedItem }) => {

  const handleNextClick = () => {
    const step3Element = document.getElementById('step3');
    if (step3Element) {
      step3Element.scrollIntoView({ behavior: 'smooth' });
    }
    setClickedItem(/* 클릭된 항목의 인덱스를 넣으세요 */);

  };
  

  return (
    <div id="step2" className="step2-container">
      <div className="step2-container-grid">
        <div className="step2-grid-item-1"></div>
        <div className="step2-grid-item-2">
          <div className="step2-title">STEP 2</div>
          <div className="step2-content">
            원하시는 꽃다발 분위기가 있다면 <br />
            아래 사진들 중 한가지를 골라 주세요!
          </div>

          <div className="step2-number">02</div>

          <ImageSlider setClickedItem={setClickedItem} />

          <div class="step2-next-btn" onClick={handleNextClick}>
            →
          </div>

        </div>
        <div className="step2-grid-item-3"></div>
      </div>
    </div>
  );
};

export default Step2;
