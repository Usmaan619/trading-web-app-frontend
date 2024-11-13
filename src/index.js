import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// CSS
import "./component/asset/css/splide.min.css"
import "./component/asset/webfont/tabler-icons.min.css"

// JS

// import "./component/asset/js/smooth-scrollbar.js"
// import "./component/asset/js/splide.min.js"
// import "./component/asset/js/three.min.js"
// import "./component/asset/js/vanta.fog.min.js"
// import "./component/asset/js/main.js"






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
