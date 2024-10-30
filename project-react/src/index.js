import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
// import Sci from './Sci';
import Sci2 from './Sci2';
import Form from './Form';
import MyOwnTable from './MyOwnTable';
//import reportWebVitals from './reportWebVitals';
import Task01 from './task01/Task01_com';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
    <MyOwnTable />
    <Task01/>
    <Sci2 /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
