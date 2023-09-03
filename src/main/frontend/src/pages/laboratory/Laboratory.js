import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LaboratoryHeader from './LaboratoryHeader';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import SubmitButton from '../../components/SubmitButton';
import Loading from '../../components/Loading';

function Laboratory() {
  const [step1Text, setStep1Text] = useState('');
  const [clickedItem, setClickedItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(-1);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        navigate(`/result`);
      }, 2000);
    }
  }, [isLoading, navigate]);

  const handleSubmitButtonClick = () => {
    console.log('click!');
    setIsLoading(true);
  };

  return (
    <div>
      {isLoading ? (
        <Loading /> // isLoading이 true일 때 로딩 페이지 표시
      ) : (
        // isLoading이 false일 때 다른 컴포넌트 표시
        <>
          <LaboratoryHeader />
          <Step1 setStep1Text={setStep1Text} />
          <Step2 setClickedItem={setClickedItem} />
          <Step3 setSelectedItem={setSelectedItem} />
          {step1Text && clickedItem !== null && selectedItem !== -1 && (
            <SubmitButton onClick={handleSubmitButtonClick} />
          )}
        </>
      )}
    </div>
  );
}

export default Laboratory;
