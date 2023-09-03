import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './about/About';
import Laboratory from './laboratory/Laboratory';

import ScrollToTop from '../components/ScrollToTop';
import Loading from '../components/Loading';
import Result from '../pages/Result'

import '../styles/App.css'

function App() {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/laboratory" element={<Laboratory />} />
                <Route path="/market" element={<About />} />
                <Route path="/result" element={<Result />} />
                <Route path="/loading" element={<Loading />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;