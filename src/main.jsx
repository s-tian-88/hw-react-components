import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Calendar } from './components/Calendar/Calendar.jsx'


const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
    <React.StrictMode>
        <App type = "FC" />
        <App type = "CC" />
        <Calendar timestamp = {Date.now()} />
    </React.StrictMode>
)
