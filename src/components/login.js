import React, { useState } from 'react';
import login from './login.jpg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/login', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      // Handle successful login
      console.log('Logged in!');
      
    } else {
      // Handle failed login
      console.log('Failed to log in');
    }
  };

  return (
    <div>
      <section className="h-screen pt-20">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src={login} className="w-full" alt="Sample" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form
                className="bg-emerald-50 shadow-md rounded px-8 pt-5 pb-8 mb-4"
                onSubmit={handleSubmit}
              >
                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-100 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-blue"
                    id="uname"
                    name="uname"
                    placeholder="Username"
                    
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="upwd"
                    name="upwd"
                    placeholder="Password"
                    
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>

                <div className="text-center">
                  <Button variant="info" type="submit">
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
