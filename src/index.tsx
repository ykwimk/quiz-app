import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global-styles';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
