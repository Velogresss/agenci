import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/translate/i18n';

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);