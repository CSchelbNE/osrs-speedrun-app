import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContext, {AuthProvider} from "./authentication/auth-context-provider";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthProvider>
              <Routes>
                  <Route path="/*" element={<App />} />
              </Routes>
          </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);

