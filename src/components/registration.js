import React, { useState } from 'react';
import axios from "axios"
import { useNavigate, NavLink } from 'react-router-dom';
const Registration = () => {
  const [uname, setUname] = useState('');

  const [upwd, setUpwd] = useState('');

  const history = useNavigate();

  const setdata=(e)=>{
    setUname(e.target.value);
    console.log(e.target.value)
  }

  const setPassword=(e)=>{
    setUpwd(e.target.value);
    console.log(e.target.value);
  }


  const admindata = async (e) => {
    e.preventDefault();
    console.log("fetches")
    var formData = new FormData();

    
    formData.append("uname", uname);
    formData.append("upwd", upwd);
    console.log(uname)
    console.log(upwd)

    


    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const res = await axios.post("/register1", formData, config);

    // console.log(res);

    if (res.data.status == 201) {
      history("/admin")
    } else {
      console.log("error")
    }

  }


//   const handleSubmit = async (event) => {
//     console.log("enters")
//     event.preventDefault();

//     const response = await fetch('/api/register1', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username,  password }),
//     });

//     if (response.ok) {
//       console.log('Registration successful!');
//       // Redirect the user to the login page
//       window.location.href = '/';
//     } else {
//       console.error('Registration failed');
//     }
//   };

  return (
    <div>
      <h1>Register</h1>
      <form >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="uname"
           name='uname'
            onChange={setdata}
          />
        </div>
        
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="upwd"
            name='upwd'
            onChange={setPassword}
          />
        </div>
        <button type="submit" onClick={admindata}>Register</button>
      </form>
    </div>
  );
};

export default Registration;
