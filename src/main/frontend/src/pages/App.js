import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';

import '../styles/App.css'

function App() {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<Main />} />
                    <Route path="/contact" element={<Main />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;