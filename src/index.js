import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/translate/i18n';
import store from './Redux/Store'
import { Provider } from 'react-redux'
import { MenuProvider } from './context/MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <MenuProvider>
        <App />
      </MenuProvider>
    </I18nextProvider>
  </Provider>
);