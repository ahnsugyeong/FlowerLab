import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Recommend from './Recommend';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import '../styles/App.css'

function App() {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/recommend" element={<Recommend />} />
                    <Route path="/step1" element={<Step1 />} />
                    <Route path="/step2" element={<Step2 />} />
                    <Route path="/step3" element={<Step3 />} />
                    <Route path="/boutique" element={<Main />} />
                    <Route path="/about" element={<Main />} />
                    <Route path="/market" element={<Main />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;