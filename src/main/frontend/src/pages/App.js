import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './about/About';
import Laboratory from './laboratory/Laboratory';
import About1 from './about/About1';

import LaboratoryHeader from './laboratory/LaboratoryHeader';
import Step1 from './laboratory/Step1';
import Step2 from './laboratory/Step2';
import Step3 from './laboratory/Step3';

import '../styles/App.css'

function App() {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/laboratory" element={<Laboratory />} />
                    <Route path="/market" element={<About />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;