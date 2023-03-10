import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-tailwind/react";

import '../src/Assests/tailwind/output.css';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'aos/dist/aos.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <div>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </div>
    /*</React.StrictMode>*/
)
;

reportWebVitals();
