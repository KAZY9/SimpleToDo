import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
   body {
    background-color: rgba(50, 200, 50, 0.1);
   }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>
);