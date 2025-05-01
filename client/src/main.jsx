import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="1081986290962-dgf86u09q1mtc0lj23djat4shjbgtnhm.apps.googleusercontent.com">
      <App/>
    </GoogleOAuthProvider>;
    </BrowserRouter>
  </React.StrictMode>
);

library.add(far);
library.add(fas);
library.add(fab);