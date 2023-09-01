import React, { useState, useEffect } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import '../styles/Main.css'

function Recommend() {

    return (
        <div>
            <Step1 />
            <Step2 />
            <Step3 />
            
        </div>
    );
}

export default Recommend;