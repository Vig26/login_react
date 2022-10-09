import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';
// import ContainerInsideExample from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        </Routes>
        <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
