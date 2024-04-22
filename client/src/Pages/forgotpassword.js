import React, { useState } from "react";
import axios from "axios";
//import { RecoveryContext } from "../App";

export default function ForgotPassword() {
 const [email, setEmail] = useState("");
 const [otp, setOtp] = useState("");
 const [newPassword, setNewPassword] = useState("");
// const { setPage } = useContext(RecoveryContext);

const generateRandomNumber = () => {
  const num = Math.floor(Math.random() * 90000) + 10000;
  //setRandomNumber(num);
  return num
}

console.log(generateRandomNumber())

 const sendOtp = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/check_email?email=${email}`);
      if (response.status === 200) {
        const OTP = Math.floor(Math.random() * 9000 + 1000);
        console.log(OTP);
        setOtp(OTP);
        await axios.post("http://localhost:5000/send_email", {
          OTP,
          recipient_email: email,
        });
        //setPage("otp");
      } else {
        alert("User with this email does not exist!");
      }
    } catch (error) {
      console.log(error);
    }
 };

 const resetPassword = async () => {
    if (!otp || !newPassword) {
      alert("Please enter your OTP and new password");
      return;
    }

    try {
      await axios.put("http://localhost:5000/update-password", {
        email,
        newPassword,
      });
      alert("Password changed successfully, please login!");
      //setPage("login");
    } catch (error) {
      console.log(error);
    }
 };

 return (
    <div>
      <h2>Forgot Password</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={sendOtp}>Send OTP</button>
      </form>
      {otp && (
        <form>
          <label>OTP:</label>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <label>New Password:</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button onClick={resetPassword}>Reset Password</button>
        </form>
      )}
    </div>
 );
}
