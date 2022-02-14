import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./App.css";
import reportWebVitals from './reportWebVitals';


let data=[
  {
    name:"Abhay Kumar",
    id:101,
    city:"Noida",
    age:23
  },
  {
    name:"Rohit Jatav",
    id:102,
    city:"Delhi",
    age:24
  },
  {
    name:"Sudhir Yadav",
    id:103,
    city:"Surajpur",
    age:27
  },
  {
    name:"Harender Rana",
    id:104,
    city:"San Diego", 
    age:21
  },
  {
    name:"Sapna Kumari",
    id:105,
    city:"Agra",
    age:25
  },
  {
    name:"Dharm Veer",
    id:106,
    city:"Mainpuri",
    age:19
  },
];

ReactDOM.render(
  <React.StrictMode>
    <div className="main">
     <App name={data[0].name} id={data[0].id} city={data[0].city} age={data[0].age}/>
     <App name={data[1].name} id={data[1].id} city={data[1].city} age={data[1].age} />
     <App name={data[2].name} id={data[2].id} city={data[2].city} age={data[2].age}/>
     <App name={data[3].name} id={data[3].id} city={data[3].city} age={data[3].age}/>
     <App name={data[4].name} id={data[4].id} city={data[4].city} age={data[4].age}/>
    <App name={data[5].name} id={data[5].id} city={data[5].city} age={data[5].age}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
