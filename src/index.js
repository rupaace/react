import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login'
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <Routes >
    <Route path='/login' element={<Login />} />
    <Route path='/*' element={<App />} />

    </Routes>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

