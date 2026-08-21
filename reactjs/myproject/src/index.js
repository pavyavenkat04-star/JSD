import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//var stud={rno:1001,sname:"xxxx",mark:93,result:"Pass",iseligible:true}
var stud={rno:1001,sname:"swathi",marks:[80,83,90,66],result:null}
root.render(
  <React.StrictMode>
    <App data={stud}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
