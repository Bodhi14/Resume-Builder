import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider
  clientId='768438601142-7b0f5gdtltp5r83vgdpljv4va511311l.apps.googleusercontent.com'
  >
    <Provider store={store}>
    <App />
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);