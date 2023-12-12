import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios, { Axios } from 'axios';
import Routee from './route';

function App() {
  const [name,setName]=useState()
  const [pass,setPass]=useState()
  const [ress,setRess]=useState([])
  const clicke=()=>{
    axios.post("/login",{
      user:name,
      pass:pass
    }).then((res)=>{
      console.log(res)
      setRess(res.data)
      setName("")
      setPass("")
    })
  }
  return (
    <div className="App">
      <Routee />
    </div>
  );
}

export default App;
