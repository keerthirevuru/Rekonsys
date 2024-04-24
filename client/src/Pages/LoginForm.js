// src/components/LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const LoginForm = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [redirectToDashboard, setRedirectToDashboard] = useState(false);


const handleSubmit = async (e) => {
//   const data = {email:Emailaddress,username:Username,password:Password}
    // console.log({email, password})
    e.preventDefault();
     await axios.post('http://localhost:5000/login', {email, password})
      .then(response => {
        console.log(response.data);
        alert("Login  successfully");
        setRedirectToDashboard(true)
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        alert("Invalid Email or Password");
      });
 };

 if (redirectToDashboard) {
    return <Navigate to="/dashboard" />;
  }

 return (
  <div className='flex flex-col items-center justify-center w-100'>
  <section  classNameName ="bg-gray-50 dark:bg-gray-900">
  <div classNameName="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login in to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} required  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="/forgotpassword" className="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button  className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to='/register' className="font-medium text-blue-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</div>



  
 );
 }


export default LoginForm;