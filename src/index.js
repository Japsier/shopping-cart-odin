import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitcher from './Components/RouteSwitcher';
import Header from './Components/Header';
import "./Index.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitcher />
  </React.StrictMode>
);


