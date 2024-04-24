import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Register = () => {
 const [data, setData] = useState({
    Emailaddress: "",
    Username: "",
    Password: ""
 });
 const [redirectToLogin, setRedirectToLogin] = useState(false);

 const { Emailaddress, Username, Password } = data;

 const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
 };

 const submitHandler = e => {
  const data = {email:Emailaddress,username:Username,password:Password}
    e.preventDefault();
    axios.post('http://localhost:5000/register', data)
      .then(response => {
        console.log(response.data);
        alert("Submitted successfully");
        setRedirectToLogin(true);
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        alert("Error submitting form: " + error.message);
      });
 };

 if (redirectToLogin) {
  return <Navigate to="/login" />;
}
 

 return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <form autoComplete='off' onSubmit={submitHandler} className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Emailaddress">
                Email Address
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' name='Emailaddress' value={Emailaddress} onChange={changeHandler} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' name='Username' value={Username} onChange={changeHandler} />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='password' name='Password' value={Password} onChange={changeHandler} />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
 );
};

export default Register;
