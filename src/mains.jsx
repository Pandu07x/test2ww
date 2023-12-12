import React,{useState} from 'react'
import './App.css';
import axios, { Axios } from 'axios';


function Mains() {
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
        <header className="App-header">
         Usernamse: <input type='text' name='name' value={name} onChange={((e)=>setName(e.target.value))} /> <br/>
          Password: <input type='password' name="password" value={pass} onChange={((e)=>setPass(e.target.value))} /><br/>
          <button type='button' onClick={clicke}>Click Me</button>
  
          <h2>{ress}</h2>
        </header>
      </div>
    )
}

export default Mains