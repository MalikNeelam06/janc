import React, { useState } from 'react';
import axios from 'axios';
import "./index.css";
import Displayy from './displayy';
function App() {
   const[user,setUser] = useState({email:"",password:""});
   const[result,setResult]=useState({});
   const[validd,setValidd]=useState("");
   function handle(e){
   console.log(setUser({...user, [e.target.name]:e.target.value}));
   }
  async function implement(e){
    e.preventDefault();
    if(!user.email||!user.password){
        setValidd("Please enter valid value");
    }
    else{
    try{
    const response= await axios.post("https://dummyjson.com/auth/login",{
        username:user.email,
        password:user.password,
    })
    setResult(response.data);
    console.log(response.data);
    console.log(response.data.status);
}
catch(error){
    console.log(error);
}
    }
   }
  return (
    <>
    
    <div className='logg'>
<p>Welcome back! 👋</p>
<p id='p2'>Sign in to your account</p>
<form onSubmit={implement}>
    <div>
    <label>Your email</label><br/>
            <input type='text' value={user.email} onChange={handle} name='email'/>
    </div>
    <div>
    <label>Password</label><br/>
            <input type='password' value={user.password} name='password' onChange={handle}/>
    </div>
    <br/>
    <div>
    <button type='submit'>continue</button>
    </div>
</form>
<p id='p3'>Forget your password?</p>

    </div>
    <div>
    <p id='p4'>Don’t have an account? <span>Sign up</span></p>
    </div>
    <Displayy  resultt={result}/>
    </>
  )
}

export default App;