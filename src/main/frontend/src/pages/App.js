import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './about/About';
import Laboratory from './laboratory/Laboratory';

import ScrollToTop from '../components/ScrollToTop';
import Loading from '../components/Loading';

import '../styles/App.css'

function App() {

    const imagesData = ['flower1.png', 'flower2.png', 'flower3.png', 'flower4.png', 'flower5.png', 'flower6.png'];


    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/laboratory" element={<Laboratory />} />
                <Route path="/market" element={<About />} />
                <Route path="/loading" element={<Loading />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;