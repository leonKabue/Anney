import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import {ThemeProvider} from "@aws-amplify/ui-react";

import 'bootstrap/dist/css/bootstrap.min.css'

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);