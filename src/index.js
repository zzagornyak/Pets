import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/App';

import { CatProvider } from './components/Context/CatContext';

import {GlobalStyle} from './components/style/GlobalStyle'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyle/>
        <CatProvider>
            <App  />
        </CatProvider>

    </>
);

