import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAryRauSAtRazibeQhE95PFlbHCoHlYL7k",
  authDomain: "sabores-del-alma-b.firebaseapp.com",
  projectId: "sabores-del-alma-b",
  storageBucket: "sabores-del-alma-b.appspot.com",
  messagingSenderId: "74184189769",
  appId: "1:74184189769:web:9f32bb5ac2678cacc05c98"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
