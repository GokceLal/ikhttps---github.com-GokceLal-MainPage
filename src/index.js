import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import ManiPage from './Components/MainPage/MainPage';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import AdminPanel from './Components/AdminPanel/AdminPanel';

import DefinitionsPage from './Components/TanimlamalarSayfasi/DefinitionsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      
      
   
      <BrowserRouter>
      
         <Route path='/definitions' element={< DefinitionsPage/>} />
      
      </BrowserRouter>

    
    </App>

  </React.StrictMode>
);


reportWebVitals();
