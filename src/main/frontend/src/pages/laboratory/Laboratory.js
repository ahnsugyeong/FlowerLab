import React from 'react';

import LaboratoryHeader from './LaboratoryHeader';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function Laboratory() {

  return (
    <div>
      <LaboratoryHeader />
      <Step1 />
      <Step2 />
      <Step3 />
    </div>

  );
}

export default Laboratory;