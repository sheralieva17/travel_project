import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './components/context/AuthContextProvider';
import PackageContextProvider from './components/context/PackageContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
    <PackageContextProvider>
    <App />
    </PackageContextProvider>
    </AuthContextProvider>
    
  </BrowserRouter>
);

