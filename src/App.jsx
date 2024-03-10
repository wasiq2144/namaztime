import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from './store/slices/theme.slice';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NamazTime from './components/NamazTime';
import Home from './components/Home';
import Time from './components/Time';

function App() {
    const isDarkMode = useSelector(selectIsDarkMode);

    return (
        <Router>
            <div className={`lg:px-[150px] md:px-[100px] sm:px-[50px] px-[10px] ease-in-out duration-300 ${isDarkMode ? 'dark bg-dark-primary' : ''} min-h-[100vh]`}>
                <Navbar />
                <Time />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/namaz-time' element={<NamazTime />} />
            </Routes>
            </div>
        </Router>
    );
}

export default App;
