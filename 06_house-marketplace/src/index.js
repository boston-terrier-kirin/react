import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// POINT：Swiper, StrictMode では動かない。
// https://github.com/nolimits4web/swiper/issues/5613
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
