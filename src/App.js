import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {server} from './server'
server()
function App() {

  const [books,setBooks]=useState([{}])
  useEffect(()=>{

  setInterval(()=>fetch('/api/movies')  // form server.js file
  .then(resp=>resp.json())
  .then(res=>{
  setBooks(res)
  }),2000)
  },[])

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
